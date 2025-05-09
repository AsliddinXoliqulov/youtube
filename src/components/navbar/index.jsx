import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navbar_links } from '../../utils'
import { FaBars } from "react-icons/fa";
import Ytimgae from "./imges/yt.svg"
import { CiSearch } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import { RiVideoAddFill } from "react-icons/ri";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import opa from "./imges/opa.png"
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
    const style_links = "text-white hover:text-white"
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const auth = localStorage.getItem("token")
  return (
    <div className='py-3 bg-[#242424]'>
        <div className='w-[98%] m-auto flex items-center justify-between '>
            <div className='text-2xl text-white flex items-center  gap-6'>
                     <button className=' color-black '><FaBars /></button>
                     <button onClick={()=>{navigate('/')}}><img src={Ytimgae} alt="" /></button>
            </div>
            
            <div  className='flex items-center gap-4' >
                <form action="" className=' rounded-[8px] flex items-center justify-center w-[533px] border-[2px_solid_white] h-[32px]'>
                    <input type="text" placeholder='Search' className=' rounded-[15px_0_0_15px] text-[#ffff] outline-none w-full h-full  bg-[#181818] p-2' />
                    <button className=' rounded-[0_15px_15px_0] w-[54px] bg-[#424242] h-full flex items-center justify-center'><CiSearch style={{ color: 'white', fontSize: '24px' }}  /></button>
                </form>
                <button className=' w-[32px] h-[32px] rounded-[100%] bg-[#424242] flex items-center justify-center' style={{ color: 'white', fontSize: '20px' }}><IoMicOutline /></button>
            </div>

            <div className='flex items-center gap-7'>
               <button className='bg-transparent  h-[38px] w-[38px]  rounded-[100%]  flex items-center justify-center transition-[0.2s] hover:bg-[#424242]'><RiVideoAddFill  style={{ color: 'white', fontSize: '20px' }} /></button>
               <button className='bg-transparent  h-[38px] w-[38px]  rounded-[100%]  flex items-center justify-center transition-[0.2s] hover:bg-[#424242]'> <BsFillGrid3X3GapFill  style={{ color: 'white', fontSize: '20px' }}/></button>
              <button className='bg-transparent  h-[38px] w-[38px]  rounded-[100%]  flex items-center justify-center transition-[0.2s] hover:bg-[#424242]'> <BsBell  style={{ color: 'white', fontSize: '20px' }} /></button>
              {auth?<button onClick={()=>{navigate("/login")}}><img src={opa} alt="" className='w-10'/></button>:<button onClick={()=>{navigate("/login")}}><FaRegUserCircle style={{fontSize:"25px",color:'white'}} /></button>}
              
            </div>
        </div>    
     </div>
  )
}



export default Navbar