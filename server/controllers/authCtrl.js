import User from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
//dont install bcrypt, install bcryptjs because bcrypt gives error in production


export const signup = async (req, res, next) => {  // with next middlewear , also change the catch of try catch
// export const signup = async (req, res) => {   //this was earlier without midddlewear
    console.log(req.body);
    // if we check this in postman, we will get the undefind in console even if we send the data in body
    // that is because by default we can not send any json to our server, we need to add some middleware
    // we add this middlewear in server/index.js and write: app.use(express.json()); // this is the middleware that will allow us to send json data to our server
    // now we can send json data to our server

    // now we will save the data in our database
    const { username, email, password } = req.body; //4. we will have to send all 3 in data in postman for post request to http://localhost:3000/api/auth/signup
    //after  getting the password, we will hash it using bcryptjs

    const hashedPassword = bcryptjs.hashSync(password, 12); // 12 is the salt value, we can use any number, but 12 is recommended
    // if we use only hash we will have to use await

    const newUser = new User({ username, email, password: hashedPassword }); // we saved the hased password here earlier code is below, and that code saved the password in database as it is
    //const newUser = new User({ username, email, password }); //3. this goes to userSchema.js (which we imported on top) and create a new user according to the schema we created there
    // we can write this code without try catch also
    // but if something goes wrong, we will not be able to catch the error
    try {
        await newUser.save(); //5. this will save the data in database, how to hit
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        // res.status(500).json(error.message);// this was replaced with middlewear respone because we want our response like that
        //next(error); // or we can make a custom error handler in utils/error.js and use it here like this
        next(errorHandler);
    }
};
