import express from "express";
import { signup } from "../controllers/authCtrl.js";


const router = express.Router();


// this is signup api for our app
router.post("/signup" ,signup)
//now this is combined with app.use(api/auth) from index.js
// and it become http://localhost:3000/api/auth/signup check it on postman
// when we hit the url on postman it will show the message from signup function in authCtrl.js
// 2. and signup fn is in authCtrl.js first import it and then go to authCtrl.js to see what it do.

export default router;