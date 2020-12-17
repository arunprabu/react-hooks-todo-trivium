import React, { useContext } from 'react'
import { PageContext } from '../PageContext'
import MyProfile from './MyProfile'
import Todo from './Todo'
import UserData from './UserData'

const Home = () => {
  // Step 3 of useContext() Hook
  // Receive data from App Comp
  const context = useContext(PageContext);
  
  return (
    <div>
      <h1>Welcome to Hooks Demo!</h1>
      
      <MyProfile />
      <hr/>
      <UserData />
      <hr/>
      <Todo />

      <hr />
      <h2> useContext() Hook Demo</h2>
      <p>{context.isLoggedIn? 'User has Logged In': 'No! not Logged In'}</p>
      <p>Last Login: {context.lastLogin}</p>
    </div>
  )
}

export default Home;
