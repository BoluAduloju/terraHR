import { useState } from "react"
import logo from "../assets/terraHq.png"
import { RiArrowDownSLine, RiMenu3Line, RiCloseFill } from "@remixicon/react";


const Navbar = () => {

  const[isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
       setIsOpen(!isOpen)
  }
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 m-2">
      <div className="flex justify-between items-center text-neutral-900 bg-transparent backdrop-blur max-w-7xl mx-auto px-4 py-3 border-b-2 border-neutral-100">
         <img src={logo} alt="logo" width={120} height={24}/>

         <div className="hidden lg:flex space-x-6">
            <a href="#products" className="hover:font-medium transition flex">Products <span><RiArrowDownSLine /></span></a>
            <a href="#about" className="hover:font-medium transition flex">About Us <span><RiArrowDownSLine /></span></a>
            <a href="#resources" className="hover:font-medium transition flex">Resources <span><RiArrowDownSLine /></span></a>
            <a href="#pricing" className="hover:font-medium transition">Pricing</a>
            <a href="#Contact" className="hover:font-medium transition">Contacts</a>
         </div>

         <div className="hidden lg:flex space-x-4 items-center">
            <a href="#" className="font-medium">Login</a>
            <a href="#" className=" px-4 py-2 bg-[#01382e] font-medium text-white hover:bg-[#011a15]">Request Demo</a>
         </div>

         <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-neutral-900 focus:outline-none" aria-label={isOpen ? "Close Menu" : "Open Menu"}>
              {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
            </button>
         </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-50 backdrop-blur mt-2 p-4 ">
           <div className="flex flex-col space-y-4">
           <a href="#products" className="hover:font-medium transition ">Products </a>
            <a href="#about" className="hover:font-medium transition ">About Us </a>
            <a href="#resources" className="hover:font-medium transition ">Resources </a>
            <a href="#pricing" className="hover:font-medium transition">Pricing</a>
            <a href="#Contact" className="hover:font-medium transition">Contacts</a>

            <a href="#" className="font-medium">Login</a>
            <a href="#" className=" px-4 py-2 bg-[#01382e] text-white hover:bg-[#011a15]">Request Demo</a>
           </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar