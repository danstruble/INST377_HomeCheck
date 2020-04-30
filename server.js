// These are our required libraries to make the server work.
// We're including a server-side version of Fetch to build on your client-side work
const express = require('express');
const fetch = require('node-fetch');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev, dir: './public' });
const handle = server.getRequestHandler();
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

    function processDataForFrontEnd(req, res) {
      const baseURL = 'https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json'; // Enter the URL for the data you would like to retrieve here

      const addressDict = {};
      // Your Fetch API call starts here
      // Note that at no point do you "return" anything from this function -
      // it instead handles returning data to your front end at line 34.
      fetch(baseURL)
        .then((response) => response.json())
        .then((parsedResponse) => {
          parsedResponse.forEach((entry) => {
            const address = (`${entry.street_number} ${entry.street_name} ${entry.street_type} ${entry.city} ${entry.state}, ${entry.zip_code}`);
            console.log(address);
            if (entry.property_id in addressDict) {
              addressDict[entry.property_id].count += 1;
            } else {
              addressDict[entry.property_id] = { 'address': address, 'count': 1 };
            }
          });
          console.log(addressDict);
        });
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
