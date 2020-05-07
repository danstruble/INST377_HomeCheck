// These are our required libraries to make the server work.
// We're including a server-side version of Fetch to build on your client-side work
const express = require('express');
const fetch = require('node-fetch');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev, dir: './public' });
const handle = server.getRequestHandler();
require('dotenv').config();

server
  .prepare()
  .then(() => {
    // Here we instantiate the server we're going to turn on
    const app = express();


    // Servers are often subject to the whims of their environment.
    // Here, if our server has a PORT defined in its environment, it will use that.
    // Otherwise, it will default to port 3000
    const port = process.env.PORT || 3000;

    // Our server needs certain features - like the ability to send and read JSON
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // And the ability to serve some files publicly, like our HTML.
    app.use(express.static('public/build'));

    async function getCoords(location) {
      let apiKey = process.env.API_KEY;
      let locationURL = "http://open.mapquestapi.com/geocoding/v1/address?key=" + apiKey + "&location=" + location.address.street_number + "+" + location.address.street_name + "+" + location.address.street_suffix + "," + location.address.city + "," + location.address.state + "," + location.address.zip;
      let coords;
      await fetch(locationURL)
        .then((data) => {
          return data;
        })
        .then((response) => response.json())
        .then((response) => {
          return response.results[0].locations[0].latLng;
        })
        .then((response) => coords = response);
      return coords;
    }

    function processDataForFrontEnd(req, res) {
      const baseURL = 'https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json'; // Enter the URL for the data you would like to retrieve here

      let addressDict = {};
      // Your Fetch API call starts here
      // Note that at no point do you "return" anything from this function -
      // it instead handles returning data to your front end at line 34.
      fetch(baseURL)
        .then((response) => response.json())
        .then((parsedResponse) => {
          // this then statement structures data taken from the database, which allows us to streamline the next calls
          parsedResponse.forEach(entry => {
            try {
              if (entry.property_id in addressDict) {
                addressDict[entry.property_id].count++;
                if (entry.violation_id in addressDict[entry.property_id].violations) {
                  console.log("Look at entry: ", entry);
                }
                else {
                  addressDict[entry.property_id].violations.push({ 'violationID': entry.violation_id, 'inspectionID': entry.inspection_id, 'code': entry.violation_code, 'desc': entry.violation_description });
                }
              }
              else {
                let address = { 'street_number': entry.street_number, 'street_name': entry.street_name, 'street_suffix': entry.street_type, 'city': entry.city, 'state': entry.state, 'zip': entry.zip_code };
                addressDict[entry.property_id] = { 'address': address, 'count': 1, 'violations': [{ 'violationID': entry.violation_id, 'inspectionID': entry.inspection_id, 'code': entry.violation_code, 'desc': entry.violation_description }] }
              }
            }
            catch (err) {
              console.log("Error processing entry: ", err, entry.property_id);
            }
          });
          return addressDict;
        })
        .then((addressDict) => {
          let locationArray = [];
          for (let key in addressDict) {
            if (locationArray.length < 10) {
              locationArray.push(addressDict[key]);
            }
          }
          return locationArray;
        })
        .then(async (locationArray) => {
          let geo = [];
          for (const location of locationArray) {
            let singleLoc = {};
            singleLoc['address'] = location.address;
            singleLoc['count'] = location.count;
            singleLoc['violations'] = location.violations;
            singleLoc['latLng'] = await getCoords(location);
            geo.push(singleLoc);
          };
          return geo;
        })
        .then((geo) => res.json({ data: geo }));
    }

    // This is our first route on our server.
    // To access it, we can use a "GET" request on the front end
    // by typing in: localhost:3000/api or 127.0.0.1:3000/api
    app.get('/api', (req, res) => { processDataForFrontEnd(req, res); });
    app.get('*', (req, res) => {
      return handle(req, res);
    });
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
