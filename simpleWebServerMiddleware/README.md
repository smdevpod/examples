# simple_web_server_middleware
A simple web server middleware example with logger in the terminal

#To run:
1. 'node server.js' in the terminal

2. Open up your 'localhost:3000'

3. This logs the GET request in the terminal as 'Request: Tue Aug 02 2016 10:35:50 GMT+0100 (BST)GET/'

4. You can go into 'http://localhost:3000/about' which will log this in the terminal 'Request: Tue Aug 02 2016 10:36:31 GMT+0100 (BST)GET/about
private route hit'

- this happens because we are calling the 'middleware.requireAuthentication' function on the about route, which is set in middleware.js
