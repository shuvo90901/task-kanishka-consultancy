import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const AppDesign = () => {
    return (
        <div className='bg-white grid grid-cols-2 py-20 px-20 gap-9 text-left'>
            <div className='bg-green-300 px-16 rounded-2xl py-12'>
                <p className='text-xl text-green-700 font-bold'>App Design</p>
                <p className='text-3xl py-5 font-bold'>Check our latest blog post for more update.</p>
                <div className='flex items-center gap-3 text-green-700'>
                    <p>Learn More</p>
                    <FaLongArrowAltRight />
                </div>
            </div>
            <div className='bg-gray-300 px-16 rounded-2xl py-12'>
                <p className='text-xl text-gray-700 font-bold'>App Design</p>
                <p className='text-3xl py-5 font-bold'>Check our latest blog post for more update.</p>
                <div className='flex items-center gap-3 text-gray-700'>
                    <p>Learn More</p>                    <FaLongArrowAltRight />
                </div>
            </div>
        </div>
    );
};

export default AppDesign;