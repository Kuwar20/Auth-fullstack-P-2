import express from "express";
import { test } from "../controllers/userCntrl.js";
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



export default router;