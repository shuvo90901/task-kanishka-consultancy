import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaCheck, FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import './GetInTouch.css'
import { IconName, ImVk } from "react-icons/im";

const GetInTouch = () => {
    return (
        <div className='text-left grid-touch text-gray-600 gap-10 mb-20'>
            <div className='pr-5'>
                <p className='text-3xl font-semibold'>Get in touch</p>
                <p className='text-xl py-3 font-bold text-black italic'>We can ensure reliability - low cost fares and most important. with safety and comfort in mind.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, enim. Cupiditate, hic, accusantium maxime assumenda doloribus vel explicabo, recusandae magni autem numquam debitis culpa quaerat? Repellat, labore.</p>
                <div className='flex gap-4 text-2xl py-5'>
                    <FaFacebook />
                    <AiFillTwitterCircle />
                    <FaInstagramSquare />
                    <ImVk />
                    <FaYoutube />
                </div>

            </div>
            <div>
                <p className='pb-4 font-bold'>Call us</p>
                <p>1 (234) 567-891</p>
                <p>1 (234) 987-654</p>
                <p className='py-4 font-bold'>location</p>
                <p>121 Rock Sreet, 21 Avenue,<br /> New York, NY 92103-9000</p>
                <p className='py-4 font-bold'>Our top services</p>
                <p className='flex gap-3 items-center'><FaCheck /> Local Transfers</p>
                <p className='flex gap-3 items-center'><FaCheck /> Airfort Transfers</p>
                <p className='flex gap-3 items-center'><FaCheck /> Excursions and Tours</p>
            </div>
            <div>
                <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full " />
                <input type="text" placeholder="Enter a valid Email address" className="input input-bordered w-full my-2" />
                <textarea className="textarea textarea-bordered w-full h-32" placeholder="Enter your Message"></textarea>
                <button className="btn btn-success w-full text-white mt-3">Submit</button>
            </div>
        </div>
    );
};

export default GetInTouch;