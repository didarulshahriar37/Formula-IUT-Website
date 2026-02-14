import React from 'react';
import iutLogo from "../../../assets/IUT.png";
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
            {/* Vector Background image */}
            <div
                className="bg-[#024644] text-neutral-content py-10"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400' fill='none'><circle cx='650' cy='-50' r='200' fill='%23003a39' fill-opacity='0.35'/><circle cx='-50' cy='350' r='220' fill='%23003534' fill-opacity='0.35'/><path d='M0 260C180 220 320 320 520 300C660 290 720 250 800 230V400H0Z' fill='%23003f3d' fill-opacity='0.4'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-10xl flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

                    {/* Contact Us Section */}
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

                    {/* University Info */}
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

            {/* Copyright */}
            <div>
                <aside className='p-5 text-center bg-[#003231]'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='font-bold'>Formula<span className='text-red-500'>IUT</span></span></p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;
