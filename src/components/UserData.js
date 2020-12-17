import React, {useState, useEffect } from 'react';

const UserData = () => {
  
  const [topicName, setTopicName] = useState('Welcome to Hooks!');

  useEffect( () => {
    console.log('Inside useEffect');
    document.title = topicName;
  }, [ topicName ]); // second arg is dependency
  // if the dep is changed by any means, useEffect callback will be called
  // by default useEffect callback will be called once automatically
  // remove the dep and then see

  

  return (
    <div>
      <h2>useEffect() Hook Demo</h2>
      <p>Topic Name: {topicName}</p>

      <input type='text' value={topicName} 
        onChange={ (event) => { setTopicName(event.target.value) } }/>

    </div>
  )
}

export default UserData
