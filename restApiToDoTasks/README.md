# my_first_rest_api
REST API allowing to create a user, login, create/edit/view/delete todo items using Postman

# In this project I have used:
- Sequelize
- Sqlite
- Sqlite browser (needs to be downlaoded)
- Hashing and salting passwords
- JWT for authentication (JSON Web Token)

In short:
1. Sign up a new user
2. Log them in
3. Add unique API key token to the headers
4. Then you can add todos
5. Get/ update/ delete todos
6. Log the user out


# To start the todo app:
 1. Open your terminal and run node server.js
 2. You will get a message saying 'Express listening on port 3000!'
 3. Open localhost:3000
 4. This will give you a message saying 'Todo API Root' - currently there is no more frontend

# To test your REST API using POSTMAN:

- You first must create a user. Therefore do a POST request to localhost:3000/users with a JSON raw Body of 
{
    "email": "1anc123@op.pl",
    "password": "abc1234512"
}

- Then you need to login, so do a POST request to localhost:3000/users/login with a raw JSON body of the data you just used to create a user i.e. 
{
    "email": "1anc123@op.pl",
    "password": "abc1234512"
}

This returns you Status: 200 and the following:
{
  "id": 1,
  "email": "1anc123@op.pl",
  "createdAt": "2016-08-01T16:47:37.335Z",
  "updatedAt": "2016-08-01T16:47:37.335Z"
}

If you open up your sqlite database, you can see that in fact there ar emore fields created then the ones listed in the return element. I.e. in your database you should see the following fields in the user table:
 * id, email, salt, password_hash, createdAt, updatedAt

- Under headers in Postman, copy the Auth key and add it to all of your other requests- this is the unique identifier which is used in for that specific user. When a new user is created, you will need to use their unique Auth key in order to access their todo items.

- You can the do a GET /todos request in order to view all of the todo tasks that user has - you will recieve an empty array as first you need to add tasks

- To add a task, do a POST /todos request which looks like this:
{
    "description": "walk the dog 2",
    "completed": false
}

Which will give you this response: 
{
  "id": 1,
  "description": "walk the dog 2",
  "completed": false,
  "createdAt": "2016-08-01T16:54:30.610Z",
  "updatedAt": "2016-08-01T16:54:30.615Z",
  "userId": 1
}

- Then you can GET this specific task by doing a GET request to /todos/:id e.g. id = 1, which will give you this back:
{
  "id": 1,
  "description": "walk the dog 2",
  "completed": false,
  "createdAt": "2016-08-01T16:54:30.610Z",
  "updatedAt": "2016-08-01T16:54:30.615Z",
  "userId": 1
}

- You can also do a DELETE /todos/:id request, which will delete the todo item

- PUT /todos/:id allows you to update a specific todo item, where you pass in the field you want to update with the new value e.g. 
{
    "description": "testing update!"
}

- You can also find specific items bu doing a GET request to /todos?completed=true which will return all of the items that have the completed key as a true value. 

You can also do /todos?q=dog which will return all of the items which have a dog in their description

- In order to logout a user, make a delete request to users/login




