import express from "express";
import { test, updateUser, deleteUser } from "../controllers/userCntrl.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

// made a api , check it on localhost:3000 in browser or postman
// for homepage
// router.get("/", (req, res) => {
//     res.json({
//     message: "Api is working",
//     });
// });

// we created controller folder that stores the logic for the routes so we can simply import it from controller and use it here
// router.get("/abc", test); //  this will be http://localhost:3000/api/user/abc , index.js and this will meerge and become this url
router.get("/", test); // http://localhost:3000/api/user/abc

router.post("/update/:id", verifyToken, updateUser);
// first signin from a account in postman get its id,
// then use that id in the url to update the user
// http://localhost:3000/api/user/update/657d31875a1507c60c38e5c0
// where id is the id of the user in the mongodb , using this id we can update the user by sending the data in the body of the request, whatever we send in the body will be updated
//  body : {
//   "username":"test1updated"
// }  
// this will update the username of the user with id 657d31875a1507c60c38e5c0
// if we try to upate the user with different id then it will give error
// lastly verifyToken is a middleware in utils folder

router.delete("/delete/:id", verifyToken, deleteUser);



export default router;