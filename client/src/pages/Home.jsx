import React from 'react'

const Home = () => {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>Welcome to my  Auth App</h1>
      <p className='mb-4 text-slate-700'>This is a full-stack web application built with the MERN
        (MongoDB, Express, React , Node.js) stack. It
        includes authentication and log out, and provides access to
        protected routes for authenticated users.
      </p>
      <p>
      Our platform leverages Firebase Authentication for robust user identity management, offering a secure and hassle-free sign-up and login experience. Harness the power of OAuth for Google Sign-In to enable users to access your application effortlessly with their Google credentials.
      </p>
      <br />
      <p>
      With Firebase File Storage, our web app ensures reliable and scalable storage solutions for your user-generated content. Effortlessly upload, download, and manage files while ensuring data integrity and security. Firebase's powerful infrastructure guarantees high availability and low-latency access to your stored data.
      </p>
      <br />
      <p>
      Embrace efficient state management with Redux Toolkit and Redux Persist. Redux Toolkit simplifies the process of managing the application state, ensuring a predictable and maintainable codebase. Redux Persist adds a layer of persistence, allowing users to seamlessly continue their experience across sessions.
      </p>
    </div>
  )
}

export default Home