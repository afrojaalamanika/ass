import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='flex justify-between px-8 py-5'>
        <div className='flex gap-1'>

            <Image src='/logo.png' alt='logo' width={15}
  height={5}></Image>
            <h2 className=''>FITLOG</h2>
        </div>
        <h2 className=' text-gray-500 '>
© 2026 FitLog — Workout Library. Train hard, log honest.</h2>
        </div>
    );
};

export default Footer;