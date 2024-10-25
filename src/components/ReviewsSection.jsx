import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaQuoteLeft } from 'react-icons/fa';
import { RiArrowDownSFill } from 'react-icons/ri';
import { FaRegStarHalf } from "react-icons/fa";

const ReviewsSection = () => {
    return (
        <section className="bg-black text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Review Title */}
                <div className="flex items-center">
                    <FaQuoteLeft className="text-4xl text-white mr-4" />
                    <h2 className="text-5xl font-semibold">
                        Mahindra XUV700 <span className="font-light">User Review</span>
                    </h2>
                </div>

                {/* Star Rating and Review Count */}
                <div className="flex items-center mt-4">
                    <div className="flex space-x-1 text-yellow-600 text-3xl">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <FaRegStarHalf />
                    </div>
                    <span className="text-4xl font-bold ml-4">4.5</span>
                    <span className="text-sm text-gray-400 ml-2">From our 108 users</span>
                </div>

                {/* Write Review Button and Filter */}
                <div className="flex justify-between items-center mt-6">
                    <button className="px-6 py-2 text-yellow-600 border border-yellow-600 rounded-full hover:bg-yellow-600 hover:text-black">
                        Write your Review
                    </button>
                    <button className="px-5 py-1 text-white border-2 border-gray-300 rounded-2xl flex items-center font-semibold tracking-wide">
                        Filter <RiArrowDownSFill className="ml-2" />
                    </button>
                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {[1, 2, 3].map((review, idx) => (
                        <div
                            key={idx}
                            className="border-2 border-white px-4 py-8 rounded-lg flex flex-col justify-between hover:scale-110 delay-100 transition ease-in-out hover:shadow-xl"
                        >
                            <div>
                                <div className="flex space-x-1 text-yellow-400">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <p className="mt-4">
                                    It is a fantastic car with good mileage, features, looks,
                                    performance, and build quality are the best.
                                </p>
                            </div>
                            <div className="mt-4 text-gray-400 text-sm">
                                <p>By Mahendrakumar Baviskar</p>
                                <p>On: Aug 18, 2022 | 193 Views</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-10">
                    <button className="px-5 py-1 text-yellow-600 border-2 border-yellow-600 rounded-3xl flex items-center font-semibold text-wrap hover:scale-110 delay-100 transition ease-in-out hover:shadow-xl">
                        View More <RiArrowDownSFill className="ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
