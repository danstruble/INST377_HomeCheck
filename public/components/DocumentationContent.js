import React from 'react';


const DocumentationContent = () => (
    <div className = "container">
        <div className = "wrapper">
            <div className = "Content">
            <header className ="documentationHeader">
                <h1>How to Use Our App </h1>
            </header>
            
                <h2>Next JS</h2>
                <p>We used React JS in order to create an interactive interface.</p>
                <p>Most of the content seen on our website was integrated by using Javascript. </p>
                <p>We create various components that were exported to the front end of our various pages.</p>
                <p>These components were used to create the layout of our website. We also used a CSS styling sheet to design the look of our website.</p>
                
                 <h2>Leaflet</h2>
                 <p>We used this mapping library in order to create a map that will display the various houses within a search. </p> 
                 <p>After entering a location from the search bar, the user will be able to view a map with the homes that a person is interested in.</p>

                 <h3>API</h3>
                 <p>In order to access the PG county data, we used a fetch api call to get the content on the various housing inspection violations.</p>
                 <p>This data was stored into a server on the backend. Afterwards users on the site would be able to access that data through a fetch api call.</p>

                 
                 
                   
                 </div>
            </div>    
        </div>
);
export default DocumentationContent;
        
        
        
      


 
        




        
       
        

        