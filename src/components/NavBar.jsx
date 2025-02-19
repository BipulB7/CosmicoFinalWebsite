import React from 'react' 
import { FaXTwitter } from "react-icons/fa6";  
import { FaGithub } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <div className="absolute top-0 left-0 flex justify-between items-center w-full h-20 text-white bg-transparent ">   

      {/*Left Section*/}
      <div className="flex justify-between ml-12 space-x-3 py mt-5">  

        <button className="text-4xl text-gray-500 hover:text-gray-400 ">
            <FaXTwitter /> 
        </button>
        
        <button className="text-4xl text-gray-500 hover:text-gray-400 px-7">
            <FaGithub />
        </button>

      </div>

       {/*Right Section*/}
      <div className="flex justify-between mr-12 px-3 mt-5"> 

      <button className="bg-transparent border-3 border-transparent bg-gradient-to-r from-[#FFB200] via-[#EB5B00] to-[#E52020] bg-clip-border px-6 py-2 rounded-lg font-bold">
        Login
      </button>
      
      </div>



    </div>
  )
}

export default NavBar