import React from 'react';

const Navbar = ({ setToken }) => {
    return (
        <div className='flex items-center py-2 px-[4%] justify-between'>
            {/* Text logo with Admin below */}
            <div className="flex flex-col leading-tight">
                <h1 className='text-2xl font-bold text-black'>
                    Buy<span className='text-blue-500'>Buddies</span>
                </h1>
                <span className="text-sm text-gray-500">Admin</span>
            </div>

            <button
                onClick={() => setToken('')}
                className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'
            >
                Logout
            </button>
        </div>
    );
};

export default Navbar;
