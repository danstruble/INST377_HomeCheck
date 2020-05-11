import React from "react";

const AboutContent = () => (
  <div className="container">
    <div className="wrapper">
      <h1>We are Home<span className="green-highlight">CHECK</span></h1>
      <div className="description">
        <p>
          Building code violations are problematic to prospective buyers and
          renters, as they can be costly to fix, and can pose a health/safety
          risk. We recognize the need for buyers and renters to know the
          building violations before purchase or rent; however, it's often
          difficult for them to find this information.
          <pre></pre>
          For Prince George's County, although there is a database with all
          house inspection violations, it is not easily accessible to those who
          are trying to find information on a certain area or home. Hence, we
          propose HomeCheck as a solution to solve this information issue.
          <pre></pre>
          HomeCheck compiles Prince George's County House Inspections data and
          creates a visual tool with a search feature to find violations. Our
          team hopes to provide a user-friendly web application that helps
          Prince George's buyers and renters to have easy access to building
          code violations. We strongly encourage buyers and renters of Prince
          George's County to use our application before deciding on any home
          property.
        </p>
      </div>
      <h1>Meet the <span className="green-highlight">Team</span></h1>
      <div className="about-team">
        <div className="team-member">
          <div className="img">
            <img src="../static/images/img2.jpg" alt="img2"></img>
          </div>
          <div className="person">
            <div className="name">
              <b>Xiuwei Li</b>
            </div>
            <div className="role">
              <p>CSS Stylist & Wireframe Creator & Documentation Writer</p>
            </div>
            <div class="divider"></div>
            <div className="interests">
              <p>
                My interests include enjoying the company of cats, playing
                games, and cooking.
              </p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="img">
            <img src="../static/images/img3.png" alt="img3"></img>
          </div>
          <div className="person">
            <div className="name">
              <b>Kevin Ngo</b>
            </div>
            <div className="role">
              <p>Front-end Developer & Presentation Writer</p>
            </div>
            <div class="divider"></div>
            <div className="interests">
              <p>
                My interests include taking over the world, and killing the
                Joestar bloodline.
              </p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="img">
            <img src="../static/images/img5.jpg" alt="img5"></img>
          </div>
          <div className="person">
            <div className="name">
              <b>Dan Struble</b>
            </div>
            <div className="role">
              <p>Back-end Developer & API Endpoints Tester</p>
            </div>
            <div class="divider"></div>
            <div className="interests">
              <p>My interests are in networking and visualization.</p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="img">
            <img src="../static/images/img1.jpeg" alt="img1"></img>
          </div>
          <div className="person">
            <div className="name">
              <b>Jonathan Chen</b>
            </div>
            <div className="role">
              <p>Front-end Developer & Documentation Writer</p>
            </div>
            <div class="divider"></div>
            <div className="interests">
              <p>
                My interests include playing basketball, listening to music and
                playing the piano. I also enjoy learning about data science
                techniques.
              </p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="img">
            <img src="../static/images/img4.jpg" alt="img4"></img>
          </div>
          <div className="person">
            <div className="name">
              <b>Dalton Stoner</b>
            </div>
            <div className="role">
              <p>Front-end Developer & Presentation Writer</p>
            </div>
            <div class="divider"></div>
            <div className="interests">
              <p>I am interested in long walks on the beach, and cooking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutContent;
