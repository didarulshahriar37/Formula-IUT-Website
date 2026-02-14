import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import TeamPhoto from "../../assets/SLider2.jpg"

const Team = () => {

    // Dynamic title handling
    useEffect(() => {
        document.title = 'FormulaIUT | Team';
    }, []);

    // Scroll to team content after clicking the down arrow
    const scrollToSection = () => {
        const section = document.getElementById('team-content');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-black'>
            {/* Team Photo */}
            <div className='relative w-full h-svh min-h-80'>
                <img src={TeamPhoto} alt="" className='w-full h-full object-cover' />
                <div className='absolute left-0 right-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-black pointer-events-none'></div>
                <button type="button" onClick={scrollToSection} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white">
                    <ChevronDown className="scroll-arrow w-9 h-9 md:w-10 md:h-10" />
                </button>
            </div>
            
            {/* Team Content */}
            <div id="team-content" className='px-5 md:px-0 pb-16'>
                <div>
                    <h2 className='text-4xl md:text-6xl font-extrabold text-white text-center mt-20 mb-20 w-11/12 mx-auto'>Meet Our Team</h2>
                </div>
                <div className='border-2 border-red-500 w-full md:max-w-8/12 mb-10 mx-auto'></div>
                {/* Chassis */}
                <div className='w-full md:max-w-8/12 mx-auto'>
                    <h2 className='text-2xl md:text-4xl font-bold mb-5 text-center'>Chassis</h2>
                    <p className='text-base md:text-lg text-center'>The University of Western Australia Motorsport Team (UWAM) is a group of diverse and dedicated students that work together to design, build and test an electric formula-style vehicle to participate in the Formula SAE competition. The team strive for excellence each year with five core values in mind:</p>
                </div>
            </div>
        </div>
    );
};

export default Team;
