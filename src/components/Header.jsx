import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { RiArrowDownSFill } from "react-icons/ri";

const Header = () => {
    return (
        <header className="flex justify-between bg-black p-4 flex-col">
            <div className="flex items-center space-x-4 w-[444px] pt-4">
                <IoMdMenu className="text-white text-[1.8rem]" />
                <div className=" flex px-4 py-1 w-full rounded-full bg-gray-700 text-white items-center gap-4">
                    <CiSearch className='text-slate-200' />
                    <input
                        type="text"
                        className=" bg-transparent border-none outline-none w-[85%]"
                    />
                    <FaArrowRight className='font-thin text-slate-500' />
                </div>
            </div>
            <div className='flex mx-auto pt-12 '>
                <nav className="flex space-x-6 text-white text-lg gap-24 text-[1.3rem]">
                    <a href="#" className="text-yellow-400 hover:text-yellow-500">
                        Overview
                    </a>
                    <div className='flex justify-center items-center'>
                        <a
                            href="#"
                            className="hover: border-b-2 border-transparent hover:border-blue-500"
                        >
                            Compare
                        </a>
                        <RiArrowDownSFill />
                    </div>

                    <a
                        href="#"
                        className="hover: border-b-2 border-transparent hover:border-blue-500"
                    >
                        Images
                    </a>
                    <a
                        href="#"
                        className="hover: border-b-2 border-transparent hover:border-blue-500"
                    >
                        User Reviews
                    </a>
                    <a
                        href="#"
                        className="hover: border-b-2 border-transparent hover:border-blue-500"
                    >
                        Variants
                    </a>
                    <a
                        href="#"
                        className="hover: border-b-2 border-transparent hover:border-blue-500"
                    >
                        Videos
                    </a>
                    <div className='flex justify-center items-center'>
                        <a
                            href="#"
                            className="hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500"
                        >
                            More
                        </a>
                        <RiArrowDownSFill />
                    </div>

                </nav>
            </div>

        </header>
    );
};

export default Header;

