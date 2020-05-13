import React from "react";

const DocumentationContent = () => (
  <div className="container">
    <div className="wrapper">
      <h1>
        How to Use Home<span className="green-highlight">CHECK</span>
      </h1>
      <div className="description">
        <ol>
          <li>Navigate to the Home Page.</li>
          <li>
            On Home Page, you should see a search bar, enter the address (must
            include the street number, name, and suffix) that you wish to look
            up for house inspection violation.
          </li>
          <li>
            Once you have entered, press Enter or click on the light blue button
            that shows up when you hover over the search bar.
          </li>
          <li>
            The result will show up on the map, and clicking on the marker will
            show home inspection violation information.
          </li>
          <br></br>

          <div className="note">
            It should be noted the Prince George's County API only provides 1000
            rows of data when using their offical SODA API and this limitation
            causes an issue that the map doesn't respond when an address that
            isn't in the 1000 rows of data is entered.
            <br></br>
            <br></br>

            Some addressed for testing:
            <ul>
              <li>11505 Old Baltimore Pike</li>
              <li>5341 Southern Ave</li>
              <li>7310 Leona St</li>
              <li>5809 Fountain Rd</li>
              <li>1913 Campbell Dr</li>
            </ul>
          </div>
        </ol>
      </div>
      <h1>Developer Notes</h1>
      <div className="description">
        <h2>PUT</h2>
        <div className="api_text">/api/search</div>
        <p>
          This is a PUT request. This is called when a user first clicks the
          search button on the Home Page, and sends a JSON object which contains
          a keypair of "search", and the value being a string of the search term
          entered by the user. This will then set the session search criteria to
          be used in the results API. This API call also ensures that if the
          violation data has not been fetched from the PG County Interface, that
          it retrieves it. This specific call is asynchronous, which will
          prevent search results from returning without the dataset being
          populated on the server. After this call is completed, it will return
          a 200 code, showing it has successfully completed.
        </p>
        <br></br>

        <h2>GET</h2>
        <div className="api_text">/api/search/results</div>
        <p>
          This is a GET request. This is called after the /api/search call is
          performed after the user has searched for a location. Being a GET
          request, no data is required to be sent. This will take the session
          search which was set by the PUT request called previously, and search
          for a matching address in the violation set. If a match is found, it
          will return the geocoded coordinates of the location to display on the
          map, and the information about the location, containing violation
          data. This will then be displayed on the leaflet map.
        </p>
        <br></br>

        <h2>POST</h2>
        <div className="api_text">/api/form/submit</div>
        <p>
          This is a POST endpoint. At the minimum, a request with the body
          content of a JSON object consisting of a "name" field, "email" field,
          and "message" field shall be sent. This handles our Contact Us form,
          which enters what the user has submitted on the form into a local
          database currently hosted in the application memory. After the form
          has been successfully submitted, it will return a success message.
        </p>
      </div>
      <h1>Want to Learn More Information?</h1>
      <div className="description">
        <p>
          If you wish to learn more or work on this project, check out our{" "}
          <a href="https://github.com/danstruble/INST377_HomeCheck/blob/master/README.md">
            GitHub
          </a>
          project documentation! You can also send us any questions or inquiries
          you may have on our <i>Contact Us</i> page.{" "}
        </p>
      </div>
    </div>
  </div>
);
export default DocumentationContent;
