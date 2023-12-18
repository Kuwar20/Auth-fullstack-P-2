import User from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
//dont install bcrypt, install bcryptjs because bcrypt gives error in production
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    // with next middlewear , also change the catch of try catch
    // export const signup = async (req, res) => {   //this was earlier without midddlewear
    // console.log(req.body); // this will give output in console
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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, "Invalid credentials"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Wrong credentials"));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); // install jsonwebtoken , then import it on top, (._id is the id of the user in database)
        //so we have created token , so now we will put this token inside the cookie of the user the client side.
        const { password: hashedPassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1 hr in milliseconds
        res
            .cookie("access_token", token, { httpOnly: true, expires: expiryDate })  // when we check in postman check for cookie in response it will be named access_token
            .status(200)
            .json(rest); // we have to install cookie-parser for this, then import it on top
        // so this is now added inside the browswer cookies with the name access_token
    } catch (error) {
        next(error);
    }
};

export const google = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password: hashedPassword, ...rest } = user._doc;
            const expiryDate = new Date(Date.now() + 3600000); // 1 hr in milliseconds
            res.cookie("access_token", token, { httpOnly: true, expires: expiryDate }).status(200).json(rest);  // when we check in postman check for cookie in response it will be named access_token
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 12);
            const newUser = new User({ username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-8), email: req.body.email, password: hashedPassword, profilePicture: req.body.imageUrl });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password: hashedPassword2, ...rest } = newUser._doc;
            const expiryDate = new Date(Date.now() + 3600000); // 1 hr in milliseconds
            res.cookie("access_token", token, { httpOnly: true, expires: expiryDate }).status(200).json(rest);  // when we check in postman check for cookie in response it will be named access_token
        }
    } catch (error) {
        next(error);
    }
}

export const signout = (req, res) => {
    res.clearCookie("access_token").status(200).json({ message: "Signout successfully" });
};