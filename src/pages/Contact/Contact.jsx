import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        document.title = 'FormulaIUT | Contact Us';
    }, []);

    return (
        <div className='bg-black'>
            <div className='max-w-11/12 mx-auto pb-20'>
                <h2 className='text-4xl md:text-6xl font-extrabold text-white text-center border-b-3 border-red-500 pb-5 mt-30 mb-12 md:mb-20 mx-auto w-11/12'>
                    Contact Us
                </h2>

                <div className='flex flex-col max-w-11/12 mx-auto md:flex-row items-stretch justify-between gap-10 md:gap-30'>
                    <div className='w-full md:w-1/2 h-72 sm:h-80 md:h-auto md:min-h-105'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2168.132013167695!2d90.37861788975894!3d23.94810040791917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4abf8334fb1%3A0xbb003124c3dedc91!2sIslamic%20University%20of%20Technology!5e0!3m2!1sen!2sbd!4v1771001910700!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: "16px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                            <div className="card-body">
                                <h2 className='text-center font-bold text-2xl md:text-4xl mb-5'>Let's get in touch</h2>
                                <fieldset className="fieldset gap-3">
                                    <label className="label">Name</label>
                                    <input type="text" className="input w-full" placeholder="Your Name" required/>
                                    <label className="label">Email</label>
                                    <input type="email" className="input w-full" placeholder="Your Email" required/>
                                    <label className="label">Subject</label>
                                    <input type="text" className="input w-full" placeholder="Subject" required/>
                                    <label className="label">Message</label>
                                    <textarea className='input min-h-15 md:min-h-20 w-full' name="" id="" placeholder='Write your message...' required></textarea>
                                    <button className='btn btn-outline btn-error mt-5'>Submit</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
