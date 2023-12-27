<!--
<div align="center">
  <img src="https://socialify.git.ci/Kuwar20/Auth-fullstack-P-2/image?description=1&font=Bitter&issues=1&name=1&theme=Light" alt="Auth-fullstack-P-2" width="640" height="320" />
</div>
-->
<h1 align="center">Auth App</h1>
<p align="center">
 <a href="https://mern-auth-pa2l.onrender.com/" target="_blank">Live</a> - Full Stack Mern Auth App using Tailwind CSS 
</p>

## Demo

Watch a video showcasing the project in action : 

https://github.com/Kuwar20/Auth-fullstack-P-2/assets/66473902/d7e1dd7b-923b-4ced-917a-f6b1a3044bb9



## Prerequisites


- [Node.js](https://nodejs.org/)&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- JavaScript runtime built on Chrome's V8 JavaScript engine
- [npm](https://www.npmjs.com/)&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Package manager for JavaScript
- [MongoDB](https://www.mongodb.com/)&nbsp; &nbsp;&nbsp;&nbsp;  - NoSQL database for storing application data
- [Tailwind CSS](https://tailwindcss.com/)&nbsp; - Utility-first CSS framework for styling

## Installation & Executing the website locally

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install Auth App - Installation

```bash
npm install -g npm
```
Download this repo using
```bash
git clone github-repo-url
```

* Step-by-step Instruction - Frontend
```bash
Open a terminal

# get inside root dir
cd Auth-fullstack-P-2

# get into client dir
cd client

# install the dependencies 
npm install

# run client-side
npm run dev
```

* Step-by-step Instruction - Backend
```bash
Open another terminal

# get inside root dir
cd Auth-fullstack-P-2

# install the dependencies 
npm install

# get into server dir
cd server

# run server-side
node .
```
* Note
```text
For running this project locally, note that certain functionalities will be unavailable due to the absence of environment variables
file specified in the .gitignore file to exclude sensitive information like API keys, Database URI. Ensure you have the necessary
configuration in your local environment.
```

Folder Structure 
============================

> The project was made with the intent of hosting it on Render, Thus shaping it's current folder structure .
### Top-level directory layout


      Auth-fullstack-P-2
              │
              │
              │
              ├── client                   # React application source code
              │   │ 
              │   ├── src                      # React components and assets
              │        │ 
              |        ├── components                # React components and assets
              |        ├── pages                     # Individual pages of the application
              |        ├── redux                     # Redux-related files (actions, reducers)
              |        └── App.jsx                   # Main React application component
              │   
              ├── server                   # Node.js server files
              │   │ 
              │   ├── controllers              # Server-side controllers
              │   ├── models                   # Database models
              │   ├── routes                   # API routes
              │   ├── utils                    # Utility functions
              │   └── index.js                 # Main server file
              │   
              │ 
              ├── swagger-autogen.js       # Swagger documentation Script
              ├── swagger.json             # API documentation
              └── README.md

        
         
| Main | Folder | File Name | Details 
|----|--------|------|-------|
| client  | src | App.jsx | Entry point for Frontend
| server  | server | index.js | Entry point for Backend


# Endpoints - 4

## 1- SignUp

This endpoint is used to create a new user account.

```http
POST /api/auth/signup
```
### Request Body

JSON Request body in the following format:


``` json
{
    "username": "username",
    "email": "user@example.com",
    "password": "*********"
}
```

### Response

- Status: 201

``` json
{
    "message": "User created successfully",
}
```
---

## 2- SignIn 
<br>

This endpoint is used to authenticate and sign in a user. Upon successful execution, it returns the user's information including their ID, username, email, profile picture, creation and update timestamps, and a version field.


```http
POST /api/auth/signin
```
### Request Body

JSON Request body in the following format:

``` json
{
    "email": "user@example.com",
    "password": "********"
}
 ```

### Response

- Status: 200

``` json
{
    "_id": "user_id",
    "username": "username",
    "email": "user@example.com",
    "profilePicture": "url_to_profile_picture",
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "__v": 0
}
 ```
---
## 3- Update 
<br>

This endpoint is used to update a specific user's information. The HTTP POST request should be sent to 

```http
POST /api/user/update/{id}
```

### Request Body

JSON Request body in the following format:

``` text
Not Required
```


### Response

- Status: 200

``` json
{
    "_id": "user_id",
    "username": "username",
    "email": "user@example.com",
    "profilePicture": "url_to_profile_picture",
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "__v": 0
}

 ```
---
## 4- Delete 
<br>


This HTTP DELETE request is used to delete a specific user with the given ID.

```http
DELETE /api/user/delete/{id}
```
### Request Body

JSON Request body in the following format:

``` text
Not Required
```


### Response

- Status: 200

``` json
{
  "User has been deleted..."
}
 ```
---
## Status Codes

Auth App returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |


## Dependencies used

#### Frontend:
* react-router-dom
* @reduxjs/toolkit
* redux-persist
* firebase
* tailwindcss

#### Backend:

* bcryptjs
* jsonwebtoken
* mongoose
* cookie-parser


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

  </tr>



## Authors Note

While I was the main developer of this MERN stack project, this project couldn't have even started without the help of these open-source projects, special thanks to:

- [JavaScript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)


## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change](https://github.com/Kuwar20/Auth-fullstack-P-2/commits/main/) 
* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE Tab for details

## Acknowledgments

Inspiration, code snippets, etc.
* [React Documentation](https://react.dev/learn)
* [Mongo University](https://learn.mongodb.com/learning-paths/introduction-to-mongodb)
* [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
* [React Protected Routes](https://www.youtube.com/watch?v=iM9G0lgXsc4)
