# HomeCheck
HomeCheck is a web application built on HTML/CSS/JS with NodeJS and Express framework that is designed to help Prince George's County buyers and renters to have easy accessibility on building code violations of houses in Prince George's County. 

## Heroku Instance
Heroku instance can be found at this link: https://home-check-app.herokuapp.com/

## Target Browsers
While HomeCheck is built to be adaptive on browsers of any computer and mobile OS systems, we have only tested it on Chrome using Windows, iOS and Android. The version numbers are listed below:
- Chrome (Version 81.0.4044.129) on Windows 10 (Version 10.0.17763 Build 17763)
- Chrome (Version 81.0.4044.124) on iOS 13.3.1
- Chrome (Version 81.0.4044.117) on Android (Version 10.0)

## User Manual
[Click here](https://github.com/danstruble/INST377_HomeCheck/blob/master/docs/user.md) for the User Manual on how to use our web application.

## Developer Manual

### Installation and Dependencies
This project is stored in a Github repository, and you may fork it to your own repository and make modifications to it when cloned to your local repository. You may either choose to install GitHub Desktop or Git to clone it to your local repository. For GitHub Desktop installation and documentation, [click here](https://desktop.github.com/). For Git installation, [click here](https://git-scm.com/downloads), and for Git repository instructions, [click here](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

Once you have cloned this project from GitHub into your local repository, you would need to install Node.js, npm, and Git in order for this project to work. 

- To download and install Node.js, [click here](https://nodejs.org/en/download/). It should be noted that npm will automatically be installed along with node.js. 
- If you haven't installed Git yet, [click here](https://git-scm.com/downloads).

Once you have installed Node.js, npm, and Git, open up gitbash console and navigate to your local repository that contains this project. Run the following code to navigate to your local repository. 
```
cd {project repository path}
```

Then, you would also need to install dependencies. In the file of package.json, you would find two sections: "dependencies" and "devDependencies." The "dependencies" section outlines the dependencies that are required for the application to function and the "devDependencies" section outlines the dependencies that are required for development of the project. Install dependencies from both section if you wish to modify or work on this project, otherwise, only install dependencies from the “dependencies.” Run the following command to install dependencies.
```
npm install –save {dependency}
```

You can also run this following command to install all dependencies.
```
npm i
````

### Project Structure
>### /docs 
Contains user manual and final report.

>### /public
Front-end folder that contains images, html, css, and js files.

>### / node_modules
contains all the installed packages.

>### .env
Contains the API key.

>### .eslintrc.json
Containsrules that the js files follows.

>### .gitignore
Contains files to ignore from commits and pushes from local repositories.

>### LICENSE
License and copyright notice.

>### README.md
Introduces and explains our project.

>### package.json	
Contains project descriptions, properties, scripts, dependencies, license information, and more.

>### package-lock.json	
Records specific dependencies' version number that our application needs

>### server.js	
Contains the code that is needed to start the Node.js server for the application.

### Running the Application on a Server

#### Running Locally
To run this application locally, you must follow the instructions listed in the Installation and Dependencies. Once you have cloned the project to your local directory, and have NodeJS and all the dependencies installed, navigate to the directory that contains the project and run the following command to start the server locally which will be hosted at `localhost:3000`.

```
npm start
```

#### Running on Heroku 
To run this application on Heroku, you must first create an account with [Heroku](https://www.heroku.com/), and have this Github project forked to your Github account. After registering for Heroku, create a new app, name it appropriately, and then once brought to the deploy tab, click the GitHub icon to connect your GitHub account to your Heroku account. 

Once your account is linked, enter the name of the GitHub project when completing the App Connected to GitHub section. This should look something like "danstruble/INST377_HomeCheck". Once the project is connected, you can turn on automatic deployment of your project on the master branch, or you can opt for manual deployment, which requires you to manually load each subsequent GitHub push to your project afterwards.

After your Github project has been deployed to your Heroku project, you may access the application using the Heroku instance link.

### Testing

#### Postman
We tested the API endpoints of the server using [Postman](https://www.postman.com/) to ensure that our back-end is working correctly. 

#### Testing addresses
While testing for addresses from the databse on our application, we realized that we were only allowed to obtain 1000 rows of sample data from the Prince George's County. The 1000 rows of data can be found at their offical [API endpoint](https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json). Hence, only addressed from the 1000 rows of data will work on the application. 

Some addressed for testing:
- 11505 Old Baltimore Pike
- 5341 Southern Ave
- 5809 Fountain Rd
- 7310 Leona St
- 1913 Campbell Dr

### API


### Known Bugs
1. The Prince George's County API only provides 1000 rows of data when using their offical SODA API and this limitation causes an issue that the map doesn't respond when an address that isn't in the 1000 rows of data is entered.
2. Sometimes searching for an address may take longer.

### Future Roadmap
1. Work with the Prince George's County to either request full access to the database or Create local or online database tha can store all the data. 
2. Add a response object that indicates if the search was sucessful or not.
3. Add a loader when searching for the address to help users that it's working. 
4. Incorporate more data from other counties, then expanding to other states.
5. Implement interface for discussion that can help connect buyers and renters with the updates that a home may have.
