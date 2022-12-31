import React from 'react';
import './AboutUs.css'
import image from '../../assets/Screenshot 2022-12-31 115744.png'
import { FaApple } from 'react-icons/fa';
import { AiFillAndroid } from "react-icons/ai";
import GetInTouch from '../GetInTouch/GetInTouch';

const AboutUs = () => {
    return (
        <div className='px-20 gap-10'>
            <div className='bg-gray-200 min-h-screen grid-about pt-28 pb-80' >
                <div className='text-left px-20'>
                    <p className='text-4xl font-semibold pb-8'>About<br /> US</p>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum corporis, eaque ea aspernatur sint nemo, dolorum odio explicabo, quasi natus error? Atque quod possimus pariatur, fuga suscipit doloribus deleniti maiores dolorem esse facilis consequatur consequuntur quidem itaque modi delectus facere molestiae unde, veritatis harum saepe blanditiis minus! Omnis reprehenderit aliquid quia aut, molestias tenetur!</p>
                    <p className='text-gray-500 pt-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quibusdam enim unde omnis blanditiis ex soluta cupiditate, eius est quas alias veniam placeat assumenda laudantium, atque facere! Ab vitae facere nobis, asperiores qui illo temporibus molestiae doloremque dolore! Libero, nihil.</p>
                </div>
                <div className='text-left'>
                    <img src={image} alt="" />
                    <p className='py-8 text-3xl text-gray-600 font-semibold'>I help companies<br /> tincidunt tortor aliquam<br /> nulla facilisi cras<br /> fermentum odio</p>
                    <button className="btn btn-success text-white">Find me on Linkedin</button>
                </div>
            </div>
            <div className='bg-white mx-60 p-20 relative bottom-44'>
                <p className='text-4xl pb-7 font-bold'>Download it now.</p>
                <button className="btn btn-success text-white gap-2 px-8"><FaApple /> App Store</button>
                <button className="btn btn-success text-white gap-2 ml-5 px-5"><AiFillAndroid /> Google Play</button>
                <p className='text-gray-600 pt-10'>Add some helper text here to explain the finer<br /> details of your product or service.</p>
            </div>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default AboutUs;