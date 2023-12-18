import mongoose from "mongoose";

//create user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    },
  },
  { timestamps: true }
);

/* 
// when we check this in postman, we will send the this data in body according to the userschema
{
  "username":"user1",
  "email":"user1@gmail.com",
  "password":"kuwarboii"
}
 */

// create a collecton named users in mongodb under mern_auth project with the help of userSchema we created above
const User = mongoose.model("User", userSchema);

// if it was Kuwar like below it will create a collection named kuwars
// in mongodb under mern_auth project
// const User = mongoose.model("Kuwar", userSchema);

export default User;

// from here we will go to authCtrl.js where we will write the code to save the data in database