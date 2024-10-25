import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { MdOutlineLocalGasStation, MdOutlinePeople } from 'react-icons/md';
import { IoIosSpeedometer } from 'react-icons/io';
import { BiTransferAlt } from 'react-icons/bi';

const Cardetails = () => {
    return (
        <section className="bg-black text-white py-8 px-4 flex flex-col items-center">
            
            {/* Top Section */}
            <div className="flex justify-between items-center w-[80%] max-w-6xl mx-auto gap-4 ">
            <img src="/./images/Rainbow.png" alt="" className=' absolute  z-40 opacity-55 w-[50%] bottom-[-100%]' />
                {/* Car Info */}
                <div className="text-left">
                    <h1 className="text-4xl font-bold mb-2">Mahindra XUV 700</h1>
                    <div className="flex items-center space-x-2 mb-2">
                        {/* Stars */}
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                        ))}
                        <span className="ml-2">108 Reviews</span>
                    </div>
                    <p className="text-2xl font-semibold mb-2">Rs. 13.18 - 24.58 Lakh</p>

                </div>

                <div className="grid grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-8 text-sm">
                    {/* Specification Cards */}
                    <div className="flex items-center space-x-4">
                        <IoIosSpeedometer className="text-3xl text-sky-500" />
                        <div>
                            <p>Engine</p>
                            <p>1997 to 2184 cc</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <BiTransferAlt className="text-3xl text-sky-500" />
                        <div>
                            <p>Transmission</p>
                            <p>Manual & Automatic (TC)</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MdOutlinePeople className="text-3xl text-sky-500" />
                        <div>
                            <p>Seating Capacity</p>
                            <p>5 & 7 Seater</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <BsFillFuelPumpFill className="text-3xl text-sky-500" />
                        <div>
                            <p>Fuel Type</p>
                            <p>Petrol & Diesel</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MdOutlineLocalGasStation className="text-3xl text-sky-500" />
                        <div>
                            <p>Safety</p>
                            <p>5 Star (Global NCAP)</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className=" w-[80%]mx-auto flex mt-10 h-[700px] gap-10 ">
             
                <div className='w-[600px] h-[600px]'>
                    <img src="/./images/Car2.png" alt="Mahindra XUV 700" className=" w-full h-[80%] " />

                    <h2 className="text-3xl font-semibold mb-4 flex justify-start items-center">Mahindra <br /> XUV700  Price</h2>
                    <p className="text-center mb-4 text-[1rem] text-slate-200">
                        The price of Mahindra XUV700 starts at Rs. 13.18 Lakh and goes up to Rs. 24.58 Lakh. Mahindra XUV700 is
                        offered in 23 variants - the base model of XUV700 is MX and the top variant Mahindra XUV700 AX7
                        Diesel AT Luxury Pack AWD which comes at a price tag of Rs. 24.58 Lakh.
                    </p>
                </div>


                <div>
                    <img src="/./images/Car2text.png" alt="" className='w-[600px] items-center ' />
                    
                    <button className="mt-4 px-6 py-2 bg-orange-500 text-black font-semibold rounded-full">
                        Check Current Offers
                    </button>
                    <div>
                        <img src="/./images/Car3.png" alt="Mahindra XUV 700 Bottom" className="w-[80%] max-w-md mt-4 " />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full max-w-6xl mx-auto mt-8">
            </div>
        </section>
    );
};

export default Cardetails;
