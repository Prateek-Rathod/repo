import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (location.pathname === '/' || location.pathname.includes('collection')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    return showSearch && visible ? (
        <div className="border-t border-b bg-gradient-to-r from-gray-100 via-white to-gray-100 py-4 shadow-sm">
            <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition duration-200 ease-in-out">
                    <input
                        type="text"
                        className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                        placeholder="Search for products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <img src={assets.search_icon} className="w-5 h-5 ml-2 opacity-60" alt="search" />
                    <img
                        onClick={() => setShowSearch(false)}
                        src={assets.cross_icon}
                        className="w-4 h-4 cursor-pointer ml-3 opacity-70 hover:opacity-100 transition"
                        alt="close"
                    />
                </div>
            </div>
        </div>
    ) : null;
};

export default SearchBar;
