import React, { useContext } from 'react'
import { PageContext } from '../PageContext';

const About = () => {
  // Step 3 of useContext() Hook
  // Receive data from App Comp
  const context = useContext(PageContext);

  console.log(context);

  return (
    <div>
      <h1>About Page</h1>

      <p>{context.isLoggedIn? 'User has Logged In': 'No! not Logged In'}</p>
      <p>Last Login: {context.lastLogin}</p>
    </div>
  )
}

export default About;