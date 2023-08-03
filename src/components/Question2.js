import React from 'react'

 const Question2 = () => {
    let payload = {
        id: 1,
        firstName: 'John',
        lastName: 'Bob',
        email: 'john.doe@yopmail.com'
     };
     Object.defineProperty(payload,'id',{
         writable: false
      });
      
      //payload.id = 2;
      // Throws an error in strict mode
      
      console.log(payload);
      
  return (
    <div></div>
  )
}
export default Question2;