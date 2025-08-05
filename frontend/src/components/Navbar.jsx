import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const categories = {
  men: {
    "Topwear": ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Sweaters", "Jackets", "Blazers & Coats", "Suits", "Rain Jackets"],
    "Bottomwear": ["Jeans", "Casual Trousers", "Formal Trousers", "Shorts", "Track Pants & Joggers"],
    "Footwear": ["Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers", "Sandals & Floaters", "Flip Flops", "Socks"],
  },
  women: {
    "Topwear": ["Tops", "T-Shirts", "Shirts", "Kurtis", "Sweaters", "Jackets & Coats", "Blazers"],
    "Bottomwear": ["Jeans", "Jeggings", "Trousers", "Shorts", "Skirts", "Track Pants & Joggers"],
    "Footwear": ["Flats", "Casual Shoes", "Heels", "Boots", "Sports Shoes", "Flip Flops"],
  },
  kids: {
    "Boys Clothing": ["T-Shirts", "Shirts", "Jeans", "Shorts", "Track Pants"],
    "Girls Clothing": ["Dresses", "Tops", "T-Shirts", "Jeans", "Skirts", "Leggings"],
    "Footwear": ["Casual Shoes", "Sports Shoes", "Sandals", "Flip Flops"],
  }
};

const Navbar = () => {
  const [hoverMenu, setHoverMenu] = useState(null);
  const { setShowSearch, getCartCount, token, setToken, setCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  const handleMenuClick = (category, subCategory) => {
    navigate(`/collection?category=${category}&subCategory=${subCategory}`);
    setHoverMenu(null);
  };

  const navLinkStyle = ({ isActive }) =>
    `text-sm relative px-3 py-1 rounded hover:text-black cursor-pointer hover:bg-gray-100 ${
      isActive ? 'font-bold text-black' : 'text-gray-700'
    }`;

  return (
    <div className='flex items-center py-5 font-medium relative'>
      {/* Logo + Menu */}
      <div className='flex items-center gap-10'>
        {/* Logo */}
        <Link to='/'>
          <h1 className='text-xl font-bold text-black'>
            Buy<span className='text-blue-500'>Buddies</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden sm:flex items-center gap-2 relative'>
          <NavLink to='/' className={navLinkStyle}>Home</NavLink>

          {["men", "women", "kids"].map((cat) => (
            <li
              key={cat}
              onMouseEnter={() => setHoverMenu(cat)}
              onMouseLeave={() => setHoverMenu(null)}
              className='relative px-3 py-1 rounded cursor-pointer hover:bg-gray-100'
            >
              <span className='capitalize  text-gray-700 hover:text-black'>{cat}</span>

              {/* Mega Menu */}
              {hoverMenu === cat && (
                <div className='absolute top-full left-0 w-[800px] bg-white shadow-lg p-6 grid grid-cols-3 gap-6 z-50'>
                  {Object.entries(categories[cat]).map(([section, items]) => (
                    <div key={section}>
                      <h4 className='font-bold text-sm mb-2'>{section}</h4>
                      <ul className='space-y-1 text-gray-700 text-sm'>
                        {items.map((item) => (
                          <li
                            key={item}
                            onClick={() => handleMenuClick(cat, item)}
                            className='cursor-pointer hover:text-blue-500'
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}

          <NavLink to='/collection' className={navLinkStyle}>Collection</NavLink>
          <NavLink to='/about' className={navLinkStyle}>About</NavLink>
          <NavLink to='/contact' className={navLinkStyle}>Contact</NavLink>
        </ul>
      </div>

      {/* Icons */}
      <div className='flex items-center gap-6 ml-auto'>
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt="Search"
        />
        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile" />
          {token && (
            <div className='group-hover:block hidden absolute right-0 pt-4 z-10'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className='relative'>
          <img src={assets.cart_icon} className='w-5' alt="Cart" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
