import React from "react";
import { useState } from "react";

const Signup = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const[number,setNumber]=useState('')
  const[gender,setGender]=useState('')
  const[select,setSelect]=useState('')
 const handleSubmit=(event) => {
  setFirstname('');
  setLastname('');
  setEmail('');
  setNumber('');
  setGender('');
  setSelect('');
  event.preventDefault();
console.log(firstname,lastname,email,number,gender,select)
 }
  return (
    <div>
      <div className="signupform">

        <h3 id="head1">Sign-up Form</h3>
       
        
        <input id="in" type="text" value={firstname} onChange={(event)=>setFirstname(event.target.value)} placeholder="First Name" required></input><br></br><br></br>
        
          <input id="in" type="text" value={lastname} onChange={(event)=>setLastname(event.target.value)} placeholder="Last Name" required></input><br></br><br></br>
        
        
          <input id="in" type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="xyz@gmail.com" required></input><br></br><br></br>
        <div className="radio-group">
          <label className="gen" >Gender</label>
          <label>

          <input name="gender" type="radio" value='male' onChange={(event)=>setGender(event.target.value)} /> Male
          </label>
          <label>

          <input name="gender" type="radio" value='female' onChange={(event)=>setGender(event.target.value)} /> Female
          </label>
         
          
        </div>
        <input id="in" type="number" value={number} onChange={(event)=>setNumber(event.target.value)} placeholder="Contact Number" required></input><br></br><br></br>
        
        <select className="select" value={select} onChange={(event)=>setSelect(event.target.value)}  name="skills">
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">Javascript</option>
                <option value="React">React</option>
                <option value="Node">Node</option>
                <option value="MongDB">MongoDB</option>
             </select>
        <br></br><br></br>
       <div>
        <label>
          <input type="checkbox"/>i accept The terms of uses and privacy policy
        </label>
       </div>
       <div className="text-center submit-btn">
       <button onClick={handleSubmit}>submit</button>
       </div>
      </div>
      
    </div>
  );
};
export default Signup;
