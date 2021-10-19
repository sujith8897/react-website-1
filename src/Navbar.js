import { useState } from "react";


export default function Navbar() {

  const [click, setClick] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const handleClick = () =>{
    setClick(!click);
  }

  const changeBackground = () =>{
    if(window.scrollY > 30){
      setNavBg(true);
    }else{
      setNavBg(false);
    }
  }
 
  window.addEventListener('scroll', changeBackground);

  return (

    <nav className={navBg ? "shadow-lg fixed top-0 left-0 right-0 bg-white" : "fixed left-0 right-0 top-0  bg-white"}>
        <div className="container px-4 md:px-8 py-4 mx-auto">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold text-gray-700">
                        <a className="text-2xl font-bold text-gray-800 dark:text-white  hover:text-gray-700 dark:hover:text-gray-300" href="#">
                          <img src="logo.svg" className="w-30" />
                        </a>
                    </div>

                    {/* <!-- Mobile menu button --> */}
                    <div className="flex md:hidden" onClick={handleClick}>
                        <span className="pr-2">Menu</span>
                        <button type="button" className="text-gray-900 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-8 h-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div className={click? "flex-1 md:flex md:items-center md:justify-between border-2 border-purple-300 pb-6  mt-2 sm:mt-0 sm:border-none sm:mx-0  rounded pl-4": "flex-1 md:flex md:items-center md:justify-between hidden"}>
                    <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                        <a href="#" className="px-2 py-1 mx-2 mt-2 tracking-wider font-medium text-gray-700 transition-colors duration-200 font-bold transform rounded-md md:mt-0 md:text-center dark:text-gray-200 hover:text-gray-500">Products</a>
                        <a href="#" className="px-2 py-1 mx-2 mt-2 tracking-wider font-medium text-gray-700 transition-colors duration-200 font-bold transform rounded-md md:mt-0 dark:text-gray-200 hover:text-gray-500">Solutions</a>
                        <a href="#" className="px-2 py-1 mx-2 mt-2 tracking-wider font-medium text-gray-700 transition-colors duration-200 font-bold transform rounded-md md:mt-0 dark:text-gray-200 hover:text-gray-500">Customers</a>
                        <a href="#" className="px-2 py-1 mx-2 mt-2 tracking-wider font-medium text-gray-700 transition-colors duration-200 font-bold transform rounded-md md:mt-0 dark:text-gray-200 hover:text-gray-500">Pricing</a>
                    </div>

                    <div className="flex items-center mt-4 md:mt-0">
                      <a href="#" className=" py-1 tracking-wider font-medium text-indigo-700 transition-colors duration-200 font-bold transform rounded-md md:mt-0 dark:text-gray-200 hover:text-indigo-500">Sign In</a>
                      <button className="px-7 py-2.5 ml-4 bg-indigo-700 text-white tracking-wider font-semibold rounded ml-2 hover:bg-indigo-800">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
