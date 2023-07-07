import {BsCartPlusFill} from "react-icons/bs"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const {cart} =  useSelector((state) => state);

  return (
    <div >
      <nav className="flex items-center h-[65px] max-w-6xl mx-auto justify-between">
        <NavLink to="/">
          <div className="ml-8">
         <img src="../home.png" className="h-14"/>
          </div>
        </NavLink>
        
        <div className="flex items-center font-medium text-slate-200 mr-5 space-x-6">
        <NavLink to="/">
        <p>Home</p>
        </NavLink>

          <NavLink to="/Cart">
            <div className="relative">
            <BsCartPlusFill className="text-2xl "/>
            {
              cart.length > 0 &&
              <span className="absolute  -top-1 -right-3 bg-green-600 text-xs w-5 h-5 flex justify-center items-center
               animate-bounce rounded-full text-white">{cart.length}</span>
            }
           
            </div>
          </NavLink>
          
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
