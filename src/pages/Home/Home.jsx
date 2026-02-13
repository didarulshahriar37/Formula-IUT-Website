import React, { useEffect } from 'react';
import Slider from './Slider/Slider';
import Intro from './Intro/Intro';

const Home = () => {
    useEffect(() => {
        document.title = 'FormulaIUT | Home';
    }, []);

    return (
        <div className='bg-black pb-9'>
            <div className='w-full bg-black'>
                <Slider></Slider>
            </div>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-4xl md:text-6xl font-extrabold text-white text-center border-b-3 border-red-500 pb-5 mt-20 mb-20 w-11/12 mx-auto'>Welcome</h2>
                <div className='mb-20'>
                    <Intro></Intro>
                </div>
            </div>
        </div>
    );
};

export default Home;
