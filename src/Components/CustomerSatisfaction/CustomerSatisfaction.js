import React from 'react';
import business from '../../assets/high.png'
import strategy from '../../assets/sketch.png'
import time from '../../assets/back-in-time.png'
import investment from '../../assets/investment.png'
import growth from '../../assets/infographic.png'
import global from '../../assets/global-market.png'
import './CustomerSatisfaction.css'

const CustomerSatisfaction = () => {
    return (
        <div className='px-40 text-left pb-28 bg-white'>
            <div className='text-gray-600  py-20'>
                <p className='text-5xl font-semibold'>We believe in</p>
                <p className='text-5xl font-semibold mb-6'>Customer Satisfaction</p>
                <p className='my-2 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium fugit aliquid!</p>
                <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minima expedita voluptate?</p>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                <div className='text-gray-600 my-5 '>
                    <img className='w-10' src={strategy} alt="" />
                    <div className='first '>
                        <p className='text-2xl mt-8 mb-6 font-bold '>Business growth</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio dicta totam deleniti laudantium odit facere, nulla eos dolorum officiis cumque quaerat saepe modi recusandae quibusdam nam nihil rem doloribus fuga ipsam nesciunt?</p>
                    </div>
                </div>
                <div className='text-gray-600 my-5 bg '>
                    <img className='w-10' src={time} alt="" />
                    <div className='second'>
                        <p className='text-2xl mt-8 mb-6 font-bold '>Strategy Planning</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio dicta totam deleniti laudantium odit facere, nulla eos dolorum officiis cumque quaerat saepe modi recusandae quibusdam nam nihil rem doloribus fuga ipsam nesciunt?</p>
                    </div>
                </div>
                <div className='text-gray-600 my-5 bg '>
                    <img className='w-10' src={investment} alt="" />
                    <div className='third'>
                        <p className='text-2xl mt-8 mb-6 font-bold '>Time is Money</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio dicta totam deleniti laudantium odit facere, nulla eos dolorum officiis cumque quaerat saepe modi recusandae quibusdam nam nihil rem doloribus fuga ipsam nesciunt?</p>
                    </div>
                </div>
                <div className='text-gray-600 my-5 bg '>
                    <img className='w-10' src={growth} alt="" />
                    <div className='fourth'>
                        <p className='text-2xl mt-8 mb-6 font-bold '>Better Investment</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio dicta totam deleniti laudantium odit facere, nulla eos dolorum officiis cumque quaerat saepe modi recusandae quibusdam nam nihil rem doloribus fuga ipsam nesciunt?</p>
                    </div>
                </div>
                <div className='text-gray-600 my-5 bg '>
                    <img className='w-10' src={global} alt="" />
                    <div className='fifth'>
                        <p className='text-2xl mt-8 mb-6 font-bold '>Growth Graph</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio dicta totam deleniti laudantium odit facere, nulla eos dolorum officiis cumque quaerat saepe modi recusandae quibusdam nam nihil rem doloribus fuga ipsam nesciunt?</p>
                    </div>
                </div>
                <div className='text-gray-600 my-5 bg '>
                    <img className='w-10' src={business} alt="" />
                    <div className='sixth'>
                        <p className='text-2xl mt-8 mb-6 font-bold '>Global Business</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio dicta totam deleniti laudantium odit facere, nulla eos dolorum officiis cumque quaerat saepe modi recusandae quibusdam nam nihil rem doloribus fuga ipsam nesciunt?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSatisfaction;