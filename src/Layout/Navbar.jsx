import { useContext, useState } from 'react';
import './Navbar.css'
import { IoIosArrowDown } from "react-icons/io";
import { MyContext } from '../StateManage/StateMangeContext';

const Navbar = () => {

  const { downArrow, setDownArrow } = useContext(MyContext);


  const handleMenu = ()=>{
    setDownArrow(!downArrow)
  }
  return (
    <div className={`navbar-container absolute md:block ${downArrow ? 'hidden duration-500' : 'mt-0 duration-500'}`}>
      <div className='flex justify-between block md:hidden'>
        <button className='navbar-item '>
        Menu
        </button>
        <button className='text-white w-11 h-11' onClick={()=>handleMenu()}><IoIosArrowDown />
        </button>
      </div>
      <hr className='my-5 block md:hidden'/>
      <ul className="navbar-list ">
        <li className="navbar-item">Work</li>
        <li className="navbar-item">Instagram</li>
        <li className="navbar-item">Contact</li>
        <li className="navbar-item">Store</li>
        <li className="navbar-item">Join Our Team</li>
      </ul>
    </div>
  );
};

export default Navbar;
