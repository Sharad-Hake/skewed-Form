import React, { useEffect, useState } from 'react';

export default function Form() {
const [password,setPassword]=useState("");
useEffect(()=>{
  
})
function handleChange(event){
console.log(event.target.value);
setPassword(event.target.value)
}
  return (
    <div className='section'>
        <div className='content'> <img src='data:image/jpeg;base64,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'/></div>
        <div className='imageBox'>
        <div className='form'>
            <label>User Name</label>
           <input className='input' type="text"/>
           <label>Password</label>

         <input className='input' type="password" onChange={handleChange}/>
         {password.length>0 && password.length<=4 && <strong style={{color:'red'}}>weak</strong>}
         {password.length>4 &&password.length<=8 && <strong style={{color:'yellow'}}>medium</strong>}
         {password.length>8 && <strong style={{color:'green'}}>strong</strong>}
         <div style={{display:'flex',flexDirection:'row', marginTop:'20px'}}>
            <div className='checkbox'><input type="checkbox"/> remember me
            </div>
            <small>reset password</small>
         </div>
         <button className='btn' disabled={password.length<4 } onClick={()=>{alert("logged in successfully")}}>Submit</button></div>
       </div>
        </div>



  
  )
}
