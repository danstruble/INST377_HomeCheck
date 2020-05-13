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
            It should be noted that this application currently only works with
            Prince George's County homes, and addresses that are not in the
            Prince George's County House Inspection Violation Database will not
            show up on the map.
            <br></br>
            Some addressed for testing:
            <ul>
              <li>
              11505 Old Baltimore Pike
              </li>
              <li>
              5341 Southern Ave
              </li>
              <li>
              7310 Leona St
              </li>
              <li>
              1913 Campbell Dr
              </li>
            </ul>

          </div>
        </ol>
      </div>
      <h1>Developer Notes</h1>
      <div className="descriptions"></div>
      <h1>Want to Learn More Information?</h1>
      <div className="description">
        <p>
          If you wish to learn more or work on this project, check out our{" "}
          <a href="https://github.com/danstruble/INST377_HomeCheck/blob/master/README.md">
            GitHub
          </a>{" "}
          project documentation! You can also send us any questions or inquiries
          you may have on our <i>Contact Us</i> page.{" "}
        </p>
      </div>
    </div>
  </div>
);
export default DocumentationContent;
