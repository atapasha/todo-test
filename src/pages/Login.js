import React from 'react'
import logoIcons from '../assest/signin.gif'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'

import {useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const[showPassword,setShowPassword]=useState(false);
const [data,setData]=useState({
  email:"",
  password:""
})

const handleOnchange=(e)=>{
const{name,value}=e.target 


setData((preve)=>{
  return ({
    ...preve,
    [name]:value
})

})
}


const handleSubmit=(e)=>{
 }




console.log(data)

  return (
    
    <section id="login">

<div className="container p-4 mx-auto ">

 <div className="w-full max-w-sm p-4 mx-auto bg-white ">
<div className="w-20 h-20 mx-auto"> 
<img  src={logoIcons} alt="logo icons"  />
</div>

<form className='pt-6' onSubmit={handleSubmit} >
    <div className="grid">
        <label>Email:</label>
    <div className="p-2 bg-slate-200"> 
    
           <input type='email'
            placeholder='enter email'
            name='email'
            value={data.email}
            onChange={handleOnchange}
             className="w-full h-full bg-transparent outline-none"/>
</div>
     </div>
        <div>
        <label>Password:</label>
        <div className="flex p-2 bg-slate-200">    
                <input type={showPassword ?"text":"password"}
                 placeholder='enter password' 
                 name='password'
                 value={data.password}
                 onChange={handleOnchange}
                  className="w-full h-full bg-transparent outline-none" /> 
      <div className="text-xl cursor-pointer" onClick={()=>setShowPassword((pre)=>!pre)}>
        <span>
          {showPassword?  <FaEyeSlash/> :  <FaEye/> }
          
        
  
            </span>  
      </div>
        </div>

        <Link to={'/forgot-password'} className='block ml-auto w-fit'>Forgot apssword</Link>
     </div>  

    <button className='w-full px-3 py-2  text-white bg-red-600 max-w-[150px] rounded-full hover:bg-red-800 mx-auto block mt-4'>Login</button>

</form>
<p className='my-4 '>Dont have account?<Link to={"/sign-up"}>
  
 <span className='text-red-600'>Sign Up</span> 
  </Link></p>
 </div>

</div>
    </section> 
  )
}

export default Login