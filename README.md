# HomeCheck
HomeCheck is a web application built on HTML/CSS/JS with NodeJS and Express framework that is designed to help Prince George's County buyers and renters to have easy accessibility on building code violations of houses in Prince George's County. 

## Heroku Instance
The live demo of our application is hosted on Heroku, at this link: https://home-check-app.herokuapp.com/

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

Once you have cloned this project from GitHub into your local repository, you would need to install node.js, npm, and Git in order for this project to work. 

- To download and install node.js, [click here](https://nodejs.org/en/download/). It should be noted that npm will automatically be installed along with node.js. 
- If you haven't installed Git yet, [click here](https://git-scm.com/downloads).

Once you have installed node.js, npm, and Git, open up gitbash console and navigate to your local repository that contains this project. Run the following code to navigate to your local repository. 
```
cd {project repository path}
```

Then, you would also need to install dependencies. In the file of package.json, you would find two sections: "dependencies" and "devDependencies." The "dependencies" section outlines the dependencies that are required for the application to function and the "devDependencies" section outlines the dependencies that are required for development of the project. Install dependencies from both section if you wish to modify or work on this project, otherwise, only install dependencies from the “dependencies.” Run the following command to install dependencies.
```
npm install –save {dependency}
```

### Project Structure
>### /docs 
Contains user manual and final report.

>### /public
Front-end folder that contains images, html, css, and js files.

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

### Testing

### API

### Known Bugs

### Future Roadmap
