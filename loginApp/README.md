# login_app
A login app that allows a user to to register, login and logout using mongoDB and Node Js

#This application is an example of a login app. It allows:

	- A user to register using their name, username, email, password
	- Each field is checked to ensure allowed characters (e.g. email)

	- Once registered the user information is stored in mongo db

	- A user can login once they are registered using their username and password
	- Once logged in, a user can view their dashboard and logout

#To run this file:
 
1. Run mongo db by running mongo, and then mono
2. In the terminal, run node app.js
3. Open up localhost:3001 in order to view your app 

#This is how data is stored in the dbs:

> show dbs
local     0.000GB
loginapp  0.000GB
> use loginapp
switched to db loginapp
> show collections
users
> db.users.find()
{ "_id" : ObjectId("579f73144d61b82d04d09e0e"), "name" : "test", "email" : "test@hotmail.co.uk", "username" : "test", "password" : "$2a$10$NZNAGGCF2hMKbuiQrL92Uuztj/H.v3ymScrKNJMRJIR31mUZ2P.Ly", "__v" : 0 }

