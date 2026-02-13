import React from 'react';
import AboutUs from "../../assets/SLider2.jpg"
import whoWeAre from "../../assets/Slider3.jpg"

const About = () => {
    return (
        <div className='relative w-full h-svh min-h-80'>
            <img src={AboutUs} alt="" className='w-full h-full object-cover' />
            <div className='absolute left-0 right-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-black pointer-events-none'></div>
            <div>
                <h2 className='text-4xl md:text-6xl font-extrabold text-white text-center mt-20 mb-20 w-11/12 mx-auto'>About Us</h2>
            </div>
            <div className='w-full md:max-w-8/12 mx-auto'>
                <h2 className='text-2xl md:text-4xl font-bold text-center pb-5 border-b-3 border-red-500 mb-10'>Our Mission</h2>
                <div>
                    <p className='text-base md:text-lg text-center'>The University of Western Australia Motorsport Team (UWAM) is a group of diverse and dedicated students that work together to design, build and test an electric formula-style vehicle to participate in the Formula SAE competition. The team strive for excellence each year with five core values in mind:</p>
                    <p className='text-lg md:text-2xl font-bold text-center mt-5 pb-10 border-b-3 border-red-500 mb-20'>Competition - Education - Innovation - Community - Challenge</p>
                </div>
                <div className='space-y-16 md:space-y-24'>
                    <div>
                        <div className='flex flex-col md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16'>
                            <div className='w-full md:w-7/12 h-full'>
                                <img src={whoWeAre} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='w-full md:w-7/12'>
                                <h2 className='text-white text-2xl font-bold mb-4'>Who are we?</h2>
                                <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200'>The University of Western Australia Motorsport Team (UWAM) is a group of diverse and dedicated students that work together to design, build and test an electric, formula-style vehicle to participate in the Formula SAE competition. The team operates on an intensive one-year build cycle, with students manufacturing and testing a completely in-house design whilst simultaneously self-managing finances, marketing and events.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16'>
                            <div className='w-full md:w-7/12'>
                                <h2 className='text-white text-2xl font-bold mb-4'>A Message from our Project Manager</h2>
                                <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200 mb-4'>Involvement with the team facilitates a multitude of skills necessary across all walks of life. These include CAD modelling, electronics manufacture, machining, accounting, logistics and marketing, as well as team-work and professionalism. It is not possible to vouch enough for the fact that no matter the level of experience of those who walk into the team, they walk out some of the most all-rounded, employable individuals you'll meet.</p>
                                <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200 mb-4'>All aspects of our team functionality are managed by students. This presents a fantastic opportunity for self-development, which generally wouldn't be available to students until later in their careers. The volunteer aspect of the project requires students to develop strong interpersonal skills to influence and motivate others, as well as to establish good relationships and mutual respect in order to lead and manage effectively.</p>
                                <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200'>We hope to provide an opportunity for sponsors to contribute to the future of engineers and business professionals, through investing in our students who will develop these technologies for the rest of their careers.</p>
                            </div>
                            <div className='w-full md:w-4/12 h-full'>
                                <img src={whoWeAre} alt="" className='w-full h-full object-cover mt-12' />
                                <h2 className='text-3xl font-bold mt-15'>Name</h2>
                                <p className='text-2xl'>Project Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
