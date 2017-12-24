# sockets_chat_app
Example of a chat app, allowing several users to join providing their username and room name 

This application uses the following:
	- Bootstrap for the front end design
	- Momemnts library for the timestamp on the chat
	- sockets io
	- express

# What this application does:
	- This application allows a user to join a chat
	- The application is opened on the 'join chat' page
	- The user inserts a display name and a room name
	
	- The user then joins their specified room chat
	- Every message the user types it will appear with their name and a timestamp

	- ANOTHER user can also join the chat room, they just need to open the url and enter their own 'display name', and teh SAME room name
	- The user is informed that someone has joined the room
	- All the users can chat together
	- IF a user leaves, everyone is informed with a system message i.e. ('X has left the chat')


# How to run this application:
 - Run node app.js in the terminal
 - Open localhost:3000 to start the chat app
 OR if using HEROKU, deploy to your server using 'git push heroku' and open your server url


