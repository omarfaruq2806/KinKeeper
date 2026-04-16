import React from 'react';
import { NavLink } from 'react-router';

const Errorpage = () => {
    return (
        <div className='text-center py-6 space-y-4'>
            <h1 className='text-4xl font-bold text-[#244D3F]'>404</h1>
            <p className='text-2xl font-semibold text-[#244D3F]'>Page not found</p>
            <NavLink to="/" className='btn bg-[#244D3F] text-white py-2 px-4 rounded-md '>Go back to Home</NavLink>
        </div>
    );
};

export default Errorpage;