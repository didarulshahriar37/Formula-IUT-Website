import React from 'react';
import whoWeAre from "../../../assets/SLider2.jpg";

const Intro = () => {
    return (
        <div className='md:w-9/12 mx-auto space-y-16 md:space-y-24'>
            <div>
                <div className='flex flex-col md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16'>
                    <div className='w-full md:w-7/12 h-full'>
                        <img src={whoWeAre} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full md:w-7/12'>
                        <h2 className='text-white text-4xl md:text-5xl font-bold mb-4'>Who We Are</h2>
                        <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200'>The University of Western Australia Motorsport Team (UWAM) is a group of diverse and dedicated students that work together to design, build and test an electric, formula-style vehicle to participate in the Formula SAE competition. The team operates on an intensive one-year build cycle, with students manufacturing and testing a completely in-house design whilst simultaneously self-managing finances, marketing and events.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16'>
                    <div className='w-full md:w-7/12'>
                        <h2 className='text-white text-4xl md:text-5xl font-bold mb-4'>The Competition</h2>
                        <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200 mb-4'>Formula SAE is the largest engineering student-design competition in the world, consisting of over 500 teams globally. The premise of the competition dictates that a fictional manufacturing company has contracted the team to develop a prototype open-wheeled racecar. The car is then rigorously assessed at various events, both static and dynamic. These competitions take place across the world, in locations such as North America, England, Germany, and our home competition in Victoria, Australia.</p>
                        <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200'>Formula SAE is a student design competition initiated by the Society of Automotive Engineers in 1979. The concept behind the competition stipulates that a fictional manufacturing company has contracted a student design team to develop a small formula-style racecar. The prototype vehicle is to be evaluated for its potential as a production item.</p>
                    </div>
                    <div className='w-full md:w-6/12 h-full'>
                        <img src={whoWeAre} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
