import React, { useState } from 'react';
import Logo from "../assets/jordonlogo.png";
import NikeLogo from "../assets/nikelogo.jpg";

export default function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* The First Navbar */}
            <div className='h-9 hidden md:flex justify-between items-center px-12 bg-[#f5f5f5]'>
                <div className='h-9'>
                    <img src={Logo} className='h-9'/>
                </div>

                <div>
                    <ul className='flex space-x-4 text-xs font-semibold'>
                        <li>Find a Store</li>
                        <li>|</li>
                        <li>Help</li>
                        <li>|</li>
                        <li>Join Us</li>
                        <li>|</li>
                        <li>Sign In</li>
                    </ul>
                </div>
            </div>

            {/* The Second Navbar */}
            <div className='h-[60px] flex items-center justify-between px-6 md:px-12'>
                <div>
                    <img src={NikeLogo} className="w-20 lg:w-24"/>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex items-center md:space-x-4 lg:space-x-7 md:text-base lg:text-lg font-semibold'>
                        <li>New & Featured</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Sale</li>
                        <li>SNKRS</li>
                    </ul>
                </div>
                <div className='flex space-x-4 items-center'>
                    <div className="lg:bg-[#f5f5f5] flex items-center p-1 rounded-full">
                        <i className="text-xl fa-solid ml-1 fa-magnifying-glass lg:bg-[#f5f5f5]"></i>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="hidden lg:flex w-36 h-6 bg-transparent outline-none pl-2 text-sm"
                        />
                    </div>

                    <div className='flex space-x-4'>
                        <i className="text-2xl fa-regular fa-heart"></i>
                        <i className="text-2xl fa-solid fa-bag-shopping"></i>
                    </div>

                    {/* Hamburger Menu */}
                    <div className='md:hidden'>
                        <i 
                            className="fa-solid fa-bars text-2xl cursor-pointer" 
                            onClick={toggleSidebar}>
                        </i>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end items-center p-4">
                    <i className="fa-solid fa-times text-2xl cursor-pointer mr-2" onClick={toggleSidebar}></i>
                </div>
                <ul className="flex flex-col space-y-4 p-4">
                    <li className="text-lg font-semibold">New & Featured</li>
                    <li className="text-lg font-semibold">Men</li>
                    <li className="text-lg font-semibold">Women</li>
                    <li className="text-lg font-semibold">Kids</li>
                    <li className="text-lg font-semibold">Sale</li>
                    <li className="text-lg font-semibold">SNKRS</li>
                </ul>

                <div className='h-12 flex items-center mt-10'>
                    <div>
                        <img src={Logo} className='h-12' />
                    </div>
                    <div>
                        <p>Jordons</p>
                    </div>
                </div>

                <div className='p-4 text-base'>
                    <span>Become the Nike Member for the best products, inspiration and stories in sport
                        <p className='underline font-semibold'>Learn more</p></span>
                </div>

                <span className='p-4'>
                    <button className='px-4 py-2 bg-black text-white rounded-full mr-4'>Join Us</button>
                    <button className='px-4 py-2 bg-white text-black border-[0.5px] border-black rounded-full'>Sign Up</button>
                </span>

                <div className='p-4 text-lg font-semibold'>
                    <table>
                        <tr>
                            <td><i className="fa-solid fa-question"></i></td>
                            <td>Help</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-bag-shopping"></i></td>
                            <td>Bag</td>
                        </tr>
                        <tr>
                            <td><i class="fa-solid fa-shop"></i></td>
                            <td>Orders</td>
                        </tr>
                        <tr>
                            <td><i class="fa-solid fa-store"></i></td>
                            <td>Find a Store</td>
                        </tr>
                    </table>
                </div>

            </div>

            {/* Overlay.. when Sidebar is open */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-40" 
                    onClick={toggleSidebar}>
                </div>
            )}
        </>
    );
}
