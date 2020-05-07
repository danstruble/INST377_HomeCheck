import React from 'react';

const AboutContainer = () => (
  <div className= "about-container">
      <div className= "about-wrapper">
        <header className = "about-header">
          <h1>About Us</h1>
        </header>
        <div className = "line-one">
          <div classname = "project-about">
            <p>This is what our project is all about!</p>
          </div>
        </div>
        <div className = "line-two">
          <div className ="one">
            <div className="img1">
              <img src = "img1.png"></img>
            </div>
            <div className ="Name1">
              <p>Jonathan Chen</p>
            </div>
            <div classname = "Intro1">
              <p>My role in the project was in developing the front end and writing documentation.</p>
            </div>
            <div classname = "interests1">
              <p>My interests include playing basketball, listening to music and playing the piano. I also enjoy learning about data science techniques.</p>
            </div>
          </div>
          <div className ="two">
            <div className="img2">
              <img src = "img2.png"></img>
            </div>
            <div className ="Name2">
              <p>Xiuwei Li</p>
            </div>
            <div classname = "Intro2">
              <p>My role in the project was in the development of the wireframes and documentation, and writing the presentations.</p>
            </div>
            <div classname = "interests2">
              <p>My interests include enjoying the company of cats, playing games, and cooking.</p>
            </div>
          </div>
          <div className ="three">
            <div className="img3">
              <img src = "img3.png"></img>
            </div>
            <div className ="Name3">
              <p>Kevin Ngo</p>
            </div>
            <div classname = "Intro3">
              <p>My role in the project was in front end development.</p>
            </div>
            <div classname = "interests3">
              <p>My interests include taking over the world, and killing the Joestar bloodline.</p>
            </div>
          </div>
        </div>
        <div className = "line-three">
          <div className ="four">
            <div className="img4">
              <img src = "img4.png"></img>
            </div>
            <div className ="Name4">
              <p>Dalton Stoner</p>
            </div>
            <div classname = "Intro4">
              <p>My role in the project was in front end development, and helping to write the presentations.</p>
            </div>
            <div classname = "interests4">
              <p>I am interested in long walks on the beach, and cooking.</p>
            </div>
          </div>
          <div className ="five">
            <div className="img5">
              <img src = "img5.png"></img>
            </div>
            <div className ="Name5">
              <p>Dan Struble</p>
            </div>
            <div classname = "Intro5">
              <p>This is my intro!</p>
            </div>
            <div classname = "interests5">
              <p>These are my interests!</p>
            </div>
          </div>
        </div>
      </div>
  </div>
);

export default AboutContainer;