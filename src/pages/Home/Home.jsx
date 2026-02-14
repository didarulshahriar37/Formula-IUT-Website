import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Slider from './Slider/Slider';
import Intro from './Intro/Intro';

const Home = () => {
    useEffect(() => {
        document.title = 'FormulaIUT | Home';
    }, []);

    const scrollToSection = () => {
        const section = document.getElementById('home-content');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-black pb-9'>
            <div className='w-full bg-black relative'>
                <Slider></Slider>
                <button type="button" onClick={scrollToSection} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white">
                    <ChevronDown className="scroll-arrow w-9 h-9 md:w-10 md:h-10" />
                </button>
            </div>
            <div id="home-content" className='w-11/12 mx-auto'>
                <h2 className='text-4xl md:text-6xl font-extrabold text-white text-center border-b-3 border-red-500 pb-5 mt-20 mb-20 w-11/12 mx-auto'>Welcome</h2>
                <div className='mb-20'>
                    <Intro></Intro>
                </div>
            </div>
        </div>
    );
};

export default Home;
