import React from 'react';
import img from '../../assets/bbaahatsapp-screen-template_23-2147918680.jpg'
import { FaHandPointRight, IconName } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='bg-gray-300 min-h-screen pt-16 px-40'>
            <div className='bg-white md:grid grid-cols-2'>
                <div className='text-left pl-12 pt-16'>
                    <p className='text-gray-300 font-bold'>ABOUT US</p>
                    <p className='text-4xl'>1000+ customer using</p>
                    <p className='text-4xl mb-5'>Our application.</p>
                    <div className='flex items-center gap-3'>
                        <FaHandPointRight className='text-orange-500' />
                        <p className='text-gray-600  font-medium'>Powerful and flexible them</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaHandPointRight className='my-3 text-orange-500' />
                        <p className='text-gray-600 font-medium my-3'>Simple, transparent pricing</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaHandPointRight className='text-orange-500 mb-8' />
                        <p className='text-gray-600 font-medium mb-8'>Build tools and full documentation</p>
                    </div>
                    <button className="btn btn-success px-8">Read More</button>
                </div>
                <div className='bg-gray-100'>
                    <img className='w-1/2 mx-auto pt-10' src={img} alt="" />
                </div>
            </div>
            <div className='mt-28 pb-20'>
                <p className='text-gray-500 font-semibold text-5xl mb-10'>Quick & Easy Process</p>
                <p className='text-gray-600 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo nulla esse officiis!</p>
                <p className='text-gray-600 font-medium my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum qui aspernatur molestias </p>
                <p className='text-gray-600 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint!</p>
                <button className="btn btn-success mt-5">Read More</button>
            </div>
        </div>
    );
};

export default Banner;