# SecuriTree
Security application built for the recruitement exercise issued by EPI-USE. This application is built in JavaScript and uses the yarn package manager to manage dependencies. Naturally, npm can also be used, but some of the scripts might run differently - thus, it is advised that yarn be installed and the application is run using the provided scripts. 

## Scripts

In the project directory, you can run:

### `yarn`
If yarn is installed, running this command will install all the necessary dependencies. This must be run before running any of the following commands. 

### `yarn run dev`
Concurrently runs the app server aswell as the json server. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Naturally, these scripts would be ran independently, but for the sake of demonstration, the DB server and the Application server are combined into a single directory, and can be started by running this script. 

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn run json-server`
Runs the mock database server on [http://localhost:5000](http://localhost:5000), which can be used as a REST API to access the JSON data in db.json

## Implementation
The SecuriTree application was developed in JavaScript and React. I chose to use JavaScript as it is a language that we have never covered in my time at Stellenbosch University. I have recently been very interested in learning JavaScript and decided to challenge myself by learning a new language to solve this coding challenge. 

The frontend is developed using React and Bootstrap, which are front end libraries that are renowned in the JavaScript community. The applciation was initialised as a React Application and was built with the goal of being a standard web/server application. 

The database is conveniently implemented as a JSON server which can be used to access the database file by means of simple URL queries. All the JSON data provided is grouped into a single JSON file and accessed as one would a normal REST API. This implementation was chosen for being simple, lightweight and fast, thus removing the need for a full database implementation. All though the JSON file is not enrypted, the data is still secure as the JSON server is setup to run independently of the application, thus the user will never have access to the physical JSON file. This also allows to easily add extra security measures like encrypted data transfer, or simpler: an access token which must be used before REST API requests will be recieved.

The web application implements a very neat user interface which was built using React and Bootstrap 4. This provides the user with easy navigation and a simple user interface which is not cluttered and is simple and intuitive to use. 

## Extra notes
Since this is my first real JavaScript application, it took alot longer to figure out how to do simple things which I could have done much faster in other languages like Python. Since I had to spend alot of time figuring out how the new language works, I ran out of time trying and did not implement the encryption of the database as I would had liked to. I had other projects that also took alot of my time and I thought it better to rather hand in the exercise as is. 

I feel this exercise was a very good learning experience for me as I am now fully capable of coding React JS applications. This project serves as a good indication of my skills at creating intuitive user interfaces, learning new languages and writing good solid solutions for problems that I have not yet faced. The different approach to the data store can be considered an indication of my ability to look for, find and implement innovative solutions to problems when pressure is present in the form of deadlines. 
