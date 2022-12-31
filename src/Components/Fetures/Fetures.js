import React from 'react';
import img1 from '../../assets/Screenshot 2022-12-31 022525.png'
import img2 from '../../assets/inspired.png'
import img3 from '../../assets/happy.png'

const Fetures = () => {
    return (
        <div className='bg-gray-300 pt-16 pb-28 px-40 text-center text-gray-600'>
            <p className='text-xl font-semibold'>FEATURES</p>
            <p className='text-3xl mt-5 mb-10 font-bold'>Our Features & Services.</p>
            <div className='grid grid-cols-3 gap-5'>
                <div className='bg-white rounded-2xl'>
                    <img className='mx-auto mt-8 w-1/2' src={img1} alt="" />
                    <p className='text-xl font-bold py-5'>Communications</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nobis repellendus possimus blanditiis?</p>
                    <button className="btn btn-success my-7 px-10">More</button>
                </div>
                <div className='bg-white rounded-2xl'>
                    <img className='mx-auto mt-8 w-1/2' src={img2} alt="" />
                    <p className='text-xl font-bold py-5'>Inspired Design</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nobis repellendus possimus blanditiis?</p>
                    <button className="btn btn-success my-7 px-10">More</button>
                </div>
                <div className='bg-white rounded-2xl'>
                    <img className='mx-auto mt-8 w-1/2' src={img3} alt="" />
                    <p className='text-xl font-bold py-5'>Happy Customers</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nobis repellendus possimus blanditiis?</p>
                    <button className="btn btn-success my-7 px-10">More</button>
                </div>
            </div>
        </div>
    );
};

export default Fetures;