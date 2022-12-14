import React from 'react';
import {FaGithub, FaLinkedin, } from "react-icons/fa"
import {FiMail} from "react-icons/fi"
import {BsFillPersonBadgeFill} from "react-icons/bs"

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={30}/></>
            ),
            href: 'https://www.linkedin.com/in/khandaker-riaduzzaman-313710259/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>Github <FaGithub size={30}/></>
            ),
            href: 'https://github.com/riaduzzaman98',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>Mail <FiMail size={30}/></>
            ),
            href: 'mailto:riaduzzaman98@gmail.com',
        },
        {
            id: 4,
            child: (
                <>Resume <BsFillPersonBadgeFill size={30}/></>
            ),
            href: 'Riaduzzaman.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id, child, style, href}) => (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " " + style}>
                    <a className='flex justify-between items-center w-full text-white' target="_blank" download href={href}> 
                     <>{child}</>
                    </a>
                </li>
                ))}
                
            </ul>
        </div>
    );
};

export default SocialLinks;