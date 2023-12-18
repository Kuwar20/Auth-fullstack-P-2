import React from 'react'

const About = () => {
  return (
    
    <div className="min-h-screen bg-gray-100">
    <div className="bg-slate-500 p-4 text-white text-center">
      <h1 className="text-4xl font-bold">Mern Auth</h1>
      <p className="text-lg">Cutting-edge technology for seamless experiences</p>
    </div>
    
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Our Features</h2>
          <ul className="list-disc list-inside">
            <li>Secure Firebase Authentication</li>
            <li>Convenient Google Sign-In with OAuth</li>
            <li>Reliable Firebase File Storage</li>
            <li>Efficient Redux Toolkit and Redux Persist</li>
          </ul>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            At Mern Auth, we envision a future where technology seamlessly integrates with your daily life. Our commitment to excellence drives us to provide a platform that not only meets but exceeds your expectations.
          </p>
        </div>
      </div>
    </div>
    
    <div className="bg-slate-500 p-4 text-white text-center mt-8">
      <p className="text-lg">Join me on this exciting journey where innovation and user satisfaction converge. Discover the difference today.</p>
    </div>
    </div>
    
      )
    }
export default About