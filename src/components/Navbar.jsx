import React, { useState,useEffect } from 'react';
import { NavLink,Link } from 'react-router-dom'; // Import NavLink from react-router-dom

import logo from '../images/itlabs_logo.png';

const Navbar = () => {
    const Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/About" },
        { name: "Services", link: "/Services" },
        { name: "Solutions", link: "/Solutions" },
        { name: "Career", link: "/Career" },
        { name: "Contact", link: "/Contact" },

    ];

    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(""); // State to store active link
    const [scrolled, setScrolled] = useState(false); // State to track if navbar is scrolled

    const handleLinkClick = (link) => {
        setOpen(false);
        setActiveLink(link); // Set active link when a menu item is clicked
    };

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100; // Change threshold as needed
            if (!isTop) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <div className='w-full fixed top-0 left-0 z-20'>
            <div className='p-4 rounded-3xl'>
            <div className='shadow-md md:flex items-center justify-between py-4 
text-[#16111C] bg-white md:px-28 px-7 z-20 nav-m rounded-2xl'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[inter] text-gray-800'>
                <Link to="/home" > <img src={logo} alt="logo" className="logo" /></Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-10 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute nav-m  md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {Links.map((link) => (
                        <li key={link.name} className='md:ml-8 text-lg 
                        text-[#16111C] md:my-0 my-7 font-normal'>
                            {/* Use NavLink instead of anchor tag */}
                            <NavLink
                                to={link.link}
                                className={`${activeLink === link.link ? 'active' : ''}`}
                                onClick={() => handleLinkClick(link.link)} // Call handleLinkClick on click
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            {/* <div className={`shadow-md w-full fixed top-0 left-0  z-20 ${scrolled ? 'bg-[#090909]' : ''}`}></div> */}
         
        </div>
    );
}

export default Navbar;
