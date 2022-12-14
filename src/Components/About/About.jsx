import React from 'react';

const About = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h2>
                </div>
                <div>
                    <p className='text-xl mt-20'>
                    Highly dedicated Front End Developer. Always passionate about new
                    information & technologies. Striving to never stop learning and improving. Look forward to 
                    Working with a creative team to improve my skill and add value. Building easy-to-use,
                    user-friendly websites, and applications is truly a passion of mine. I am an expert in HTML,
                    CSS, Bootstrap, Tailwind, JavaScripts, React, Firebase, ExpressJs, NodeJs, and MongoDB.
                    In addition to my knowledge, I consider myself a quick learner, self-motivated, responsible,
                    and disciplined person who can work under pressure in critical situations
                    with analytical knowledge and the latest technology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;