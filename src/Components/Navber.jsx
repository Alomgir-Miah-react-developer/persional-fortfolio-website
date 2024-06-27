import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { TiShoppingBag } from "react-icons/ti";
import { GrBlog } from "react-icons/gr";
import { FaRegAddressBook } from "react-icons/fa6";
import { BsMoon } from "react-icons/bs";








function Navber() {
  return (
   <nav>
     <div className='container'>
        <div className="menu_row p-5 flex justify-between flex-wrap">
        <div className="logo_col">
           <Link to="#"><img src="images/logo1.png" alt="logo" /></Link>
        </div>
         <div className="menu flex">
            <ul className='flex flex-wrap gap-4 text-[13px] font-poppins font-medium'> 
            <NavLink
              to="/"
              className={({ isActive}) => isActive ? "gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 text-white flex justify-center items-center rounded-lg" : " hover:bg-[#dd2476] hover:bg-[#fa5252] text-inherit gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg" }><IoHomeOutline className='text-'/> Home</NavLink>
                
            <NavLink
              to="/about"
              className={({ isActive}) => isActive ? "gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 text-white flex justify-center items-center rounded-lg" : " hover:bg-[#dd2476] hover:bg-[#fa5252] text-inherit gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg" }><IoPersonOutline className='text-'/> About</NavLink>
                
            <NavLink
              to="/resume"
              className={({ isActive}) => isActive ? "gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 text-white flex justify-center items-center rounded-lg" : " hover:bg-[#dd2476] hover:bg-[#fa5252] text-inherit gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg" }><GrDocumentText className='text-'/> Resume</NavLink>
                
            <NavLink
              to="/works"
              className={({ isActive}) => isActive ? "gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 text-white flex justify-center items-center rounded-lg" : " hover:bg-[#dd2476] hover:bg-[#fa5252] text-inherit gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg" }><TiShoppingBag className='text-'/> Works</NavLink>
                
            <NavLink
              to="/blogs"
              className={({ isActive}) => isActive ? "gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 text-white flex justify-center items-center rounded-lg" : " hover:bg-[#dd2476] hover:bg-[#fa5252] text-inherit gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg" }><GrBlog className='text-'/> Blogs</NavLink>
                
            <NavLink
              to="/contact"
              className={({ isActive}) => isActive ? "gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 text-white flex justify-center items-center rounded-lg" : " hover:bg-[#dd2476] hover:bg-[#fa5252] text-inherit gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg" }><FaRegAddressBook className='text-'/> Contact</NavLink>
                
            </ul>
            <div className="menuBtn ml-[30px] justify-center items-center ">
                 <div className="w-[45px] h-[45px] text-[22px] bg-white flex justify-center items-center rounded-3xl text-[#446c6a] shadow-6xl hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white">
                  <BsMoon />
                </div>
              </div>
         </div>
         
        </div>
      
      </div>
   </nav>
   
  )
}

export default Navber
{/* <li><NavLink Link className=' gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg' to="#"><IoHomeOutline  className='text-xl'/>Home</NavLink></li> */}
// ' gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'