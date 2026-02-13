import React from 'react';
import iutLogo from "../../../assets/IUT.png";
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
            <div className="bg-[#024644] text-neutral-content py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-10xl flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
                    <nav className="w-full md:w-1/2">
                        <h6 className="text-white text-3xl md:text-4xl font-bold text-left">Contact Us</h6>
                        <div className="space-y-4 mt-5 text-left">
                            <a className='flex gap-2 items-center justify-start'>
                            <FaFacebook className='w-6 h-6' />
                            <p>facebook.com/_____</p>
                            </a>
                            <a className='flex gap-2 items-center justify-start'>
                            <MdEmail className='w-6 h-6' />
                            <p>_____@____.com</p>
                            </a>
                            <p>Boardbazar, Gazipur, Bangladesh</p>
                        </div>
                    </nav>
                    <aside className='flex flex-col items-center text-center w-full md:w-1/2'>
                        <a href='https://www.iutoic-dhaka.edu/'>
                            <img src={iutLogo} alt="" className='w-24 sm:w-28 md:w-32 h-auto block mx-auto' />
                        </a>
                        <a href='https://www.iutoic-dhaka.edu/' className='text-lg sm:text-xl font-bold mt-3'>
                            Islamic University of Technology
                            <br />
                            A subsidiary organ of Organisation of Islamic Cooperation(OIC)
                        </a>
                    </aside>
                </div>
            </div>
            <div>
                <aside className='p-5 text-center bg-[#003231]'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='font-bold'>Formula<span className='text-red-500'>IUT</span></span></p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;
