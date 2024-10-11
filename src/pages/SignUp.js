import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logoIcons from '../assest/signin.gif';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const[showConfirmPassword,setShowConfirmPassword]=useState(false)

  
  const [data, setData] = useState({
    email: "",
    password: "",
    name:"",
    confirmPassword:"",
    profilePic:""
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return ({
        ...prev,
        [name]: value
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // جلوگیری از بارگذاری مجدد صفحه
    console.log(data);
    // اینجا می‌توانید عملکرد ارسال اطلاعات را اضافه کنید
  };

  return (
    <section id="signup">
      <div className="container p-4 mx-auto">
        <div className="w-full max-w-sm p-4 mx-auto bg-white">
          <div className="w-20 h-20 mx-auto">
            <img src={logoIcons} alt="logo icons" />
          </div>
          <form className='pt-6' onSubmit={handleSubmit}>
            <div className="grid">
 
              <label>Name:</label>
              <div className="p-2 bg-slate-200">
                <input type='name'
                  placeholder='enter name'
                  name='name'
                  value={data.name}
                  onChange={handleOnchange}
                  className="w-full h-full bg-transparent outline-none" />
        
            </div>



              <label>Email:</label>
              <div className="p-2 bg-slate-200">
                <input type='email'
                  placeholder='enter email'
                  name='email'
                  value={data.email}
                  onChange={handleOnchange}
                  className="w-full h-full bg-transparent outline-none" />
              </div>
            </div>
            <div>
              <label>Password:</label>
              <div className="flex p-2 bg-slate-200">
                <input type={showPassword ? "text" : "password"}
                  placeholder='enter password'
                  name='password'
                  value={data.password}
                  onChange={handleOnchange}
                  className="w-full h-full bg-transparent outline-none" />
                <div className="text-xl cursor-pointer" onClick={() => setShowPassword(prev => !prev)}>
                  <span>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>


              <label>Confirm Password:</label>
              <div className="flex p-2 bg-slate-200">
                <input type={showConfirmPassword ? "text" : "password"}
                  placeholder='enter password'
                  name='confirmPassword'
                  value={data.confirmPassword}
                  onChange={handleOnchange}
                  className="w-full h-full bg-transparent outline-none" />
                <div className="text-xl cursor-pointer" onClick={() => setShowConfirmPassword(prev => !prev)}>
                  <span>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <Link to={'/forgot-password'} className='block ml-auto w-fit'>Forgot password?</Link>
            </div>
            <button className='w-full px-3 py-2 text-white bg-red-600 max-w-[150px] rounded-full hover:bg-red-800 mx-auto block mt-4'>Sigد Up</button>
          </form>
          <p className='my-4 '>Already have account?<Link to={"/login"}>
            <span className='text-red-600'> Login</span>
          </Link></p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;