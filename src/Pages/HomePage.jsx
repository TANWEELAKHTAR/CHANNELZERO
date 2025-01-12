import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'


const HomePage = () => {

    const fontArr = ['font1', 'font2', 'font3', 'font4', 'font5', 'font6', 'font7', 'font8', 'font9']
    const [font, setFont] = useState(fontArr[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFont(prevFont => {
                const currentIndex = fontArr.indexOf(prevFont);
                return fontArr[(currentIndex + 1) % fontArr.length];
            });
        }, 1500);

        return () => clearInterval(interval);
    }, []);
    const waitlistHandeler = ()=>{
        return 
    }

  return (
    <section className='w-full min-h-screen bg-[#111] text-white'>
        <div className="w-full h-36 flex items-center justify-center">
        <h1 className='text-5xl md:text-6xl font-bold'>Channel <span style={{ fontFamily: font }}>Zero</span></h1>
        </div>
        <div className="w-full flex items-center justify-between flex-col md:flex-row gap-2 bg-white text-black px-6 py-8 md:px-12">
            <Link className='text-2xl font-semibold text-center'>Launching Soon</Link>
            <Link className='text-2xl font-semibold text-center'>Jobs for all</Link>
            <Link className='text-2xl font-semibold text-center'>Our Story</Link>
        </div>
        <div className="py-10 px-6 w-full md:max-w-3xl flex flex-col items-start justify-center mx-auto">
            <p className='text-xl'>Channel zero is an app for students, dreamers, achievers, can get internships & freelance gigs. Here everybody has chance to work upon all domain just start, grow & we will provide you the platform & now for recruiters, hey get the best candidate for your gig from all the colleges, students, great minds. Join the waitlist now.</p>
            <p className='text-xl mt-2'>- Buiding with love, Team channel zero :)</p>
            <button onClick={waitlistHandeler} className='px-4 py-2 mt-6 border text-xl rounded-xl bg-white text-black font-semibold'>Join waitlist</button>
        </div>
        <div className="w-full h-36 md:h-52">
            <img className='w-full h-full object-cover object-top' src="./images/1.svg" alt="" />
        </div>
    </section>
  )
}

export default HomePage