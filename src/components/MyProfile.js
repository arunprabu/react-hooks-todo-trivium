import React, { useState } from 'react';

const MyProfile = () => {
  // useState Hook will let fn comp have state

  // useState() will return an array with getter and setter
  const [ personName, setPersonName ] = useState('Arun');
  console.log(personName);

  const handleChangeName = () => { 
    // will change the person name using setPersonName fn
    setPersonName('Smith');
  }

  return (
    <div>
      <h2>useState() Hook Demo</h2>
      <p>Person Name: {personName}</p>

      <button type='button' className='btn btn-primary' onClick={handleChangeName}>Change Name</button>

    </div>
  )
}

export default MyProfile
