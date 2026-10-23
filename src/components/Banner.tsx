import React from 'react';
import Image from 'next/image';
const Banner = () => {
    return (

<section className='py-15' >
        <div  className='bg-gray-800 rounded-2xl p-4 container mx-auto grid grid-cols-2 gap-4 items-center'>
            <div className='space-y-4'>
                <h2 className='font text-lime-400'>WORKOUT LIBRARY</h2>
                <h1 className='font-bold text-3xl'>TRAIN WITH INTENT. <br/> LOG
EVERY SET. </h1>
<h1>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
into today's plan, and watch the week's work add up.</h1>
<button className='btn btn-success bg-lime-300'>BROWSE WORKOUTS</button>

            </div>
            <Image src='/banner.png' alt='banner' width={500} height={300}/>
        </div>

        </section>

    );
};

export default Banner;