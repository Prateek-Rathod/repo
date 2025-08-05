import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})

  }

  const navLinkStyle = ({ isActive }) =>
    `flex flex-col items-center gap-1 ${isActive ? 'text-black font-bold' : 'text-gray-700'}`;

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
        <h1 className='text-3xl font-bold text-black transition-all duration-500 ease-in-out hover:scale-95 hover:opacity-90 hover:rotate-[-1deg]'>
          Buy<span className='text-blue-500'>Buddies</span>
        </h1>
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-5 text-sm'>
        <NavLink to='/' className={navLinkStyle}>
          <p className="px-3 py-1 rounded-md transition-all duration-500 ease-in-out hover:bg-gray-400 hover:scale-95">Home</p>
        </NavLink>
        <NavLink to='/collection' className={navLinkStyle}>
          <p className="px-3 py-1 rounded-md transition-all duration-500 ease-in-out hover:bg-gray-400 hover:scale-95">Collection</p>
        </NavLink>
        <NavLink to='/about' className={navLinkStyle}>
          <p className="px-3 py-1 rounded-md transition-all duration-500 ease-in-out hover:bg-gray-400 hover:scale-95">About</p>
        </NavLink>
        <NavLink to='/contact' className={navLinkStyle}>
          <p className="px-3 py-1 rounded-md transition-all duration-500 ease-in-out hover:bg-gray-400 hover:scale-95">Contact</p>
        </NavLink>
      </ul>


      {/* Icons */}
      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />

        <div className='group relative'>
          <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile" />
          {/* Drop down Menu  */}

          {token &&
            <div className='group-hover:block hidden absolute right-0 pt-4 z-10'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>}

        </div>

        <Link to="/cart" className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>

        {/* Mobile Menu Icon */}
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu" />
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white z-20 transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600 overflow-hidden'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="Back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6 border'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border'>Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
