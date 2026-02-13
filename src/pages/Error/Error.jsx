import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'FormulaIUT | Error';
        const existing = document.getElementById('lottie-player-script');
        if (!existing) {
            const script = document.createElement('script');
            script.id = 'lottie-player-script';
            script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-5xl grid gap-10 md:grid-cols-2 items-center">
                <div className="flex justify-center md:justify-start">
                    <lottie-player
                        src="/Search.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                        class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-64 sm:h-72 md:h-80 lg:h-96"
                    ></lottie-player>
                </div>
                <div className="text-center md:text-left space-y-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold">Page Not Found</h1>
                    <p className="text-base md:text-lg text-gray-300">The page you are looking for doesn’t exist or was moved.</p>
                    <div>
                        <button onClick={() => navigate(-1)} className="btn btn-outline btn-error">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
