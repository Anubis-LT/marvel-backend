Description :

The marvel backend is a training project for the students of the REACTEUR bootcamp - Working with node.js, to perform routes, such as searching, adding, modifying or deleting data. The data is stored in a mongodb database. To make queries, you can use postman Have a good routes

Before continuing, install the following programs :

node.js https://nodejs.org/en/
postman https://www.postman.com/
compass https://www.mongodb.com/products/compass
cloudinary, create an account https://cloudinary.com/
Install :

Clone the repository on your pc https://git-scm.com/docs/git-clone/fr
Open a terminal in the cloned folder
Then type the following commands
$ npm install
$ touch .env
$ vi .env
In the file type these lines

PORT=3001
MONGODB_URI="mongodb://localhost:3001"
CLOUD_NAME = "your CLOUD_NAME Info account cloudinary"
API_KEY_CLOUDINARY= "your API_KEY Info account cloudinary"
API_SECRET_CLOUDINARY= "your API_SECRET Info account cloudinary"
API_KEY="your apikey https://lereacteur-marvel-api.netlify.app"
Run : npx nodemon index.js

Routes List :

POST:

"/user/signup" Create account
"/user/login" Login account

GET :
"/" index documentation page
"/characters/" List characters
"/characters/id" List comics one character
"/comics/" list comics

DELETE :
"/user/:id" Delete user whith offers
https://marvel-backend-glt.herokuapp.com

Project student bootcamp - LE REACTEUR 2021- Promo Andromeda
