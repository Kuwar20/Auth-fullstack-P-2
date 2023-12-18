import express from "express";
import { google, signin, signup, signout } from "../controllers/authCtrl.js";


const router = express.Router();


// this is signup api for our app
router.post("/signup" ,signup)
//now this is combined with app.use(api/auth) from index.js
// and it become http://localhost:3000/api/auth/signup check it on postman
// when we hit the url on postman it will show the message from signup function in authCtrl.js
// 2. and signup fn is in authCtrl.js first import it and then go to authCtrl.js to see what it do.


router.post("/signin", signin)
// we come here from index.js
// as it is in api/auth so it will be http://localhost:3000/api/auth/signin.
// now for signin fn we need to make signin fn in authCtrl.js and then import it here.


router.post("/google" , google)
//made a api - http://localhost:3000/api/auth/google,
//now make the google fn in authCtrl.js and import it here.

router.get("/signout" , signout)


export default router;