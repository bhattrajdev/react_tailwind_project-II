import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-indigo-700  to-blue-700 content-center h-15 px-[40px]">
      {/* for logo */}
      <div className="text-[30px] font-[600] uppercase">Navbar</div>
      {/* nav items */}
      <ul className="hidden gap-10 lg:flex font-[500]">
        <li className="text-[18px] cursor-pointer  hover:text-white text-white">
          Home
        </li>
        <li className="text-[18px] cursor-pointer hover:text-white">About</li>
        <li className="text-[18px] cursor-pointer hover:text-white">Contact</li>
        <li className="text-[18px] cursor-pointer hover:text-white">
          Services
        </li>
        <li className="text-[18px] cursor-pointer hover:text-white">
          Location
        </li>
      </ul>
      <form action="" className="justify-between items-center hidden lg:flex">
        <input
          type="search"
          className="p-1 px-3 focus:outline-none rounded-sm"
          name="search"
          id="search"
          placeholder="Search Here"
        />
        <button className="text-[25px] rounded-sm px-4 capitalize ">
          <AiOutlineSearch />
        </button>
      </form>
      {/* responsive */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <div className="text-[20px] py-3  flex justify-end cursor-pointer">
            <AiOutlineClose />
          </div>
        ) : (
          <div className="cursor-pointer ">
            <FaBarsStaggered />
          </div>
        )}
      </div>
      {nav && (
        <div className=" fixed w-80 right-0 pt-4  top-11 h-full bg-gradient-to-l from-indigo-700  to-blue-700 ">
          <form action="" className="flex  ">
            <input
              type="search"
              className="p-1 mx-2 px-3 w-full focus:outline-none rounded-sm"
              name="search"
              id="search"
              placeholder="Search Here"
            />
            <button className="text-[25px] rounded-sm px-4 capitalize ">
              <AiOutlineSearch />
            </button>
          </form>
          <ul className="">
            <li className="text-[20px] cursor-pointer p-4 border-b border-gray-500 text-center  hover:text-white text-white">
              Home
            </li>
            <li className="text-[20px] cursor-pointer hover:text-white  text-center p-4 border-b border-gray-500">
              About
            </li>
            <li className="text-[20px] cursor-pointer p-4 border-b text-center  border-gray-500 hover:text-white">
              Contact
            </li>
            <li className="text-[20px] cursor-pointer p-4 border-b text-center border-gray-500 hover:text-white">
              Services
            </li>
            <li className="text-[20px] cursor-pointer p-4 border-b text-center border-gray-500 hover:text-white">
              Location
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
