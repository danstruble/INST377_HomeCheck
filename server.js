// These are our required libraries to make the server work.
// We're including a server-side version of Fetch to build on your client-side work
const express = require('express');
const session = require('express-session');
const fetch = require('node-fetch');
const next = require('next');
const cors = require('cors');
const bodyParser = require('body-parser');
const cryptoRandomString = require('crypto-random-string');
const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev, dir: './public' });
const handle = server.getRequestHandler();
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

server
  .prepare()
  .then(() => {
    // Here we instantiate the server we're going to turn on
    const app = express();

    const session_secret = cryptoRandomString({ length: 10, type: 'base64' });

    // Servers are often subject to the whims of their environment.
    // Here, if our server has a PORT defined in its environment, it will use that.
    // Otherwise, it will default to port 3000
    const port = process.env.PORT || 3000;

    // Add in a SQLite server in memory, if actually deployed, an external database would be hosted, as this data will be periodically lost
    const db = new sqlite3.Database(':memory:', (err) => {
      if(err){
        return console.error('err.message');
      }
      console.log('Connected to the in-memory SQL database');
    });

    // This creates a form schema to be used
    db.run("CREATE TABLE contact_forms (contact_form_id INTEGER PRIMARY KEY,name TEXT,email TEXT,message TEXT);",(err) => {
      if(err) {
        return console.log(err.message); 
      }
    });

    // Our server needs certain features - like the ability to send and read JSON
    app.use(express.urlencoded({ extended: true }))
      .use(cors())
      .use(bodyParser.json())
      .use(session({
        secret: session_secret,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: process.NODE_ENV !== 'production' ? false : true },
      }))

    const getCoords = async (location) => {
      let apiKey = process.env.API_KEY;
      let boundingBox = "&boundingBox=39.112823,-77.164707,38.581269,-76.496682"
      let locationURL = "http://www.mapquestapi.com/geocoding/v1/address?key=" + apiKey + "&location=" + location.address.street_number + "+" + location.address.street_name + "+" + location.address.street_suffix + "," + location.address.city + "," + location.address.state + "," + location.address.zip + boundingBox;
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

    function randomLocations(addresses, list) {
      let keys = Object.keys(addresses);
      for (key of keys) {
        list.push(addresses[key]);
      }
      return list;
    }

    async function processDataForFrontEnd() {
      const baseURL = 'https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json'; // Enter the URL for the data you would like to retrieve here

      let addressDict = {};
      // Your Fetch API call starts here
      // Note that at no point do you "return" anything from this function -
      // it instead handles returning data to your front end at line 34.
      const data = await fetch(baseURL)
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
        .then(async (addressDict) => {
          //randomly generates coordinates
          locationArray = await randomLocations(addressDict, []);
          return locationArray;
        })
        .then(async (locationArray) => {
          let geo = [];
          for (const location of locationArray) {
            let singleLoc = {};
            singleLoc['address'] = location.address;
            singleLoc['count'] = location.count;
            singleLoc['violations'] = location.violations;
            geo.push(singleLoc);
          };

          return geo;
        })
        .then((geo) => geo);


      return data;
    }

    // This is our first route on our server.
    // To access it, we can use a "GET" request on the front end
    // by typing in: localhost:3000/api or 127.0.0.1:3000/api
    app.put('/api/search', async (req, res) => {
      if (!req.session.violations) {
        req.session.violations = await processDataForFrontEnd();
      }
      req.session.search = req.body.search;
      res.end('200');
    })

    app.post('/api/form/submit', (req, res) => {
      req.session.form = req.body;
      console.log(req.session.form);
      db.run("INSERT INTO contact_forms(name, email, message) VALUES(?,?,?);", [req.session.form.name,req.session.form.email,req.session.form.message], (err) => {
        if(err) {
          return console.log(err.message); 
        }
        db.all("SELECT * FROM contact_forms;", (err, rows) => {
          console.log(rows); // just shows that it is being stored
        });
        res.end('Form has been successfully submitted!');
      });
    })

    app.get('/api/search/results', async (req, res) => {

      const violations = req.session.violations;
      const search = req.session.search;

      let [first, ...second] = search.split(" ");
      let third = second.pop();
      second = second.join(" ");

      const location = violations.find((violation) => {
        const street_number = violation.address.street_number.toString();
        const street_name = violation.address.street_name.toLowerCase();
        const street_suffix = violation.address.street_suffix.toLowerCase();

        if (street_number === first &&
          street_name === second.toLowerCase() &&
          street_suffix === third.toLowerCase()) {
          return violation;
        }
      });

      let geoCoords = await getCoords(location)

      res.send({ geoCoords, location });
    })

    app.get('*', (req, res) => {
      return handle(req, res);
    });
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
