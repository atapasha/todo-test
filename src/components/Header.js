import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import {FaRegCircleUser} from 'react-icons/fa6'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom';
  const Header = () => {
  return (
<header className='h-16 bg-white shadow-md'>
  <div className='container flex items-center justify-between h-full px-4 mx-auto'>
  <Link>
  <Logo w={90} h={50} />

  </Link>
  


<div className='items-center justify-between hidden w-full max-w-sm pl-1 border rounded-full lg:flex'>
  <input type='text' placeholder='search product here ...' className='w-full outline-none' />
<div className='h-8 text-lg bg-red-600 min-w-[50px] flex items-center rounded-r-full' >
<CiSearch />
 </div>
</div>
<div className="flex flex-row items-center gap-4">
  <div className="text-3xl cursor-pointer">  <FaRegCircleUser/> 
</div>
<div className="text-2xl cursor-pointer"> 

<span><FaShoppingCart /></span>
<div className="absolute flex items-center justify-center w-5 h-5 p-1 text-white bg-red-500 rounded-full top-2 right-13">
  <p className="text-xs">0</p>
</div>
</div>

<div>
  <Link to={'/login'} className="px-3 py-1 text-white bg-red-600 rounded-full hover:bg-red-800"> Login</Link>
 </div>
  
   </div>



  </div>

</header>

    )
}

export default Header