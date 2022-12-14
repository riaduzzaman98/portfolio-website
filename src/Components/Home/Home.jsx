import React from 'react';
import {MdArrowRightAlt} from  "react-icons/md"

const Home = () => {
    return (
        <div className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Front-end Web Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>I am a passionate web developer and i'm always eager to learn different technologies related to web development. I love to take on challenge and always try to fulfil my responsibilities.
                    </p>
                    <div>
                        <button className='btn group bg-gradient-to-r from-cyan-600 to-blue-600'> <span className='group-hover:rotate-90 duration-300'><MdArrowRightAlt size={20}/></span><a href="https://drive.google.com/file/d/1E92PacjgC5_ge5CY69-h3Qc-ILbW8e9N/view?usp=sharing" target="_blank">Resume</a></button>
                        
                    </div>
                </div>
                <div>
                <img className='rounded-2xl mx-auto md:w-full  h-96' src="https://i.ibb.co/NZ86Cdk/IMG-1371.jpg" alt="IMG-1371" border="0" />
                </div>
            </div>
        </div>
    );
};

export default Home;