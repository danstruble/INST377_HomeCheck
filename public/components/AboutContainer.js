import React from 'react';

const AboutContainer = () => (
  <div className= "about-container">
      <div className= "about-wrapper">
        <header className = "about-header">
          <h1>About Us</h1>
        </header>
        <div className = "line-one">
          <div className = "project-about">
            <p>Building violations are important points for consideration when purchasing a home.</p>
            <p>Our app is built to help prospective buyers and renters when considering a home move.</p>
            <p>This will also be useful for county inspectors to have a history of certain properties.</p>
          </div>
        </div>
        <div className = "line-two">
          <div className ="one">
            <div className="img1">
              <img src = "../static/images/img1.png" alt= "img1"></img>
            </div>
            <div className ="person1">
              <div className ="Name1">
                <p>Jonathan Chen</p>
              </div>
              <div className = "Intro1">
                <p>My role in the project was in developing the front end and writing documentation.</p>
              </div>
              <div className = "interests1">
                <p>My interests include playing basketball, listening to music and playing the piano. I also enjoy learning about data science techniques.</p>
              </div>
            </div>
          </div>
          <div className ="two">
            <div className="img2">
              <img src = "../static/images/img2.png" alt="img2"></img>
            </div>
            <div className ="person2">
              <div className ="Name2">
                <p>Xiuwei Li</p>
              </div>
              <div className = "Intro2">
                <p>My role in the project was in the development of the wireframes and documentation, and writing the presentations.</p>
              </div>
              <div className = "interests2">
                <p>My interests include enjoying the company of cats, playing games, and cooking.</p>
              </div>
            </div>
          </div>
          <div className ="three">
            <div className="img3">
              <img src = "../static/images/img3.png" alt= "img3"></img>
            </div>
            <div className ="person3">
              <div className ="Name3">
                <p>Kevin Ngo</p>
              </div>
              <div className = "Intro3">
                <p>My role in the project was in front end development and helping with creation of presentations.</p>
              </div>
              <div className = "interests3">
                <p>My interests include taking over the world, and killing the Joestar bloodline.</p>
              </div>
            </div>
          </div>
        </div>
        <div className = "line-three">
          <div className ="four">
            <div className="img4">
              <img src = "../static/images/img4.png" alt= "img4"></img>
            </div>
            <div className ="person4">
              <div className ="Name4">
                <p>Dalton Stoner</p>
              </div>
              <div className = "Intro4">
                <p>My role in the project was in front end development, and helping to write the presentations.</p>
              </div>
              <div className = "interests4">
                <p>I am interested in long walks on the beach, and cooking.</p>
              </div>
            </div>
          </div>
          <div className ="five">
            <div className="img5">
              <img src = "../static/images/img5.png" alt= "img5"></img>
            </div>
            <div className ="person5">
              <div className ="Name5">
                <p>Dan Struble</p>
              </div>
              <div className = "Intro5">
                <p>My role in the project was doing backend development.</p>
              </div>
              <div className = "interests5">
                <p>My interests are in networking and visualization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
);

export default AboutContainer;