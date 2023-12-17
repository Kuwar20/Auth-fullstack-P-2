made a react project using vite : npm create vite@latest client . (js + swt)
npm install
add tailwind in project : "google tailwind css vite" -> goto first website and do all the steps on the website.
clean the index.css , app.css and some clutter from app.jsx
do git init -> then add all files to tracking using git add . (gitignore the nodemodule and env file)
then git commit -m 'install reactjs and tailwind css and create first template'
now go to github and make a repo for this project : and paste this in cli git remote add origin https://github.com/Kuwar20/link -> git branch -M main -> git push -u origin main

after doing some progress, if you want to add them to the github then:
go to the github icon on the vscode sidebar, it will show all the changes till last , click on '+' on changes it is equivalent to 'git add . ' and add a git commit message on the top then commit and push (hidden inside side arrow on side of commmit)

*******************************************************************************************************
                                      CREATE PAGE AND ADD ROUTE:

create page : it should be created inside the src -> pages folder.

add route : install react-router-dom in client , go to main file 'app.js' and " import { BrowserRouter,Routes,Route} from "react-router-dom"; "
then in 'app.js' file in return : we first import the home, about, signin, signup, profile file page then

<!--  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter> -->

so, this added 'home' file content from the home file inside the pages folder to be at http://localhost:5173/ path and added 'about' file content from the about file inside the pages folder to be at http://localhost:5173/about/ and so on.

to redirect within the page we use link, so we import link using import { Link } from "react-router-dom" on the top of the file (here header file in component folder). and in return of the header, we use link to redirect like

<!-- 
<Link to="/">
          <h1 className="font-bold text-2xl">Auth App</h1>
</Link>
<Link to="/about">
            <li>About</li>
</Link>
<Link to="/sign-in">
            <li>SignIn</li>
</Link>

 -->

this tells that http://localhost:5173/ will be reached/redirected if you click on "Auth app " text on the header, and http://localhost:5173/about/ will be reached when you click on  'About' text of the header and so on.


****************************************************************************************************************

****************************************************************************************
to connect frontend with backend (in signup page) : 
we use fetch api to connect frontend with backend, we send data from frontend to backend using fetch api and get data from backend by storing it in a variable and then using it in frontend.
but we need to make sure that backend is running on some port and frontend is running on some other port, so we use proxy in package.json of frontend in npm / proxy in vite.config.js in vite to tell the frontend that backend is running on this port.

ex:
<!-- 
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // to fix the CORS issue
        secure: false,
      },
    },
  },
});
-->

// each time we make a request to /api, it will be redirected to http://localhost:3000/

and to make a post request with data from the frontend we need to do this in the frontend page from where we are calling the api:

<!-- const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/signup", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),  
    });
    const data = await response.json();
    console.log(data);{message: "User created successfully"}
  };
 -->

tip: keep salt value 12 in authctrl.js of password through bcrypt in backend

*****************************************************************************************

when we sign in we are getting this in response, check it in network then response :
{
    "_id": "657d31875a1507c60c38e5c0",
    "username": "test1",
    "email": "test1@test.com",
    "createdAt": "2023-12-16T05:11:35.768Z",
    "updatedAt": "2023-12-16T05:11:35.768Z",
    "__v": 0
}

and now we want to save this infornation in a global variable and use it in our web app anywhere we need
