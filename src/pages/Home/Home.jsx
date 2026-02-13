import React from 'react';
import Slider from './Slider/Slider';
import Intro from './Intro/Intro';

const Home = () => {
    return (
        <div className='bg-black'>
            <div className='w-full'>
                <Slider></Slider>
            </div>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-4xl md:text-6xl font-extrabold text-white text-center border-b-3 border-red-500 pb-5 mt-20 mb-20 w-11/12 mx-auto'>Welcome</h2>
                <div>
                    <Intro></Intro>
                </div>
            </div>
        </div>
    );
};

export default Home;
