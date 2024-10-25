import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa6";

const RelatedVideos = () => {
    return (
        <section className="bg-black text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">

                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-6 justify-center items-center'>
                        <h2 className="text-5xl font-semibold">
                            Mahindra XUV700 <br /> <span className="font-light">Related Videos</span>
                        </h2>
                        <div className='flex justify-center items-center gap-12  text-[1rem]'>
                            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
                                <FaPlay className="text-yellow-400 text-6xl" />
                            </div>
                            <p className="mt-6 text-gray-200 max-w-xl">
                                Mahindra XUV700 2022 has videos of its detailed <br /> review, pros & cons, comparison & variant <br /> explained,
                                test drive experience, features, specs, <br /> interior & exterior details and more. Watch our <br /> latest Hindi video of
                                Mahindra XUV700 to know <br /> price, safety features & more.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex items-center justify-center">
                        <img
                            src="/./images/Car7.png"
                            alt="Car video"
                            className=" h-[450px] w-[600px] object-cover shadow-xl opacity-80 border-none"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {[1, 2, 3].map((video, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-lg overflow-hidden transform hover:scale-110 delay-100 transition ease-in-out hover:shadow-xl  ${idx === 2 ? 'transform scale-90' : ''}`}>
                            <img

                                src={`/images/Video${idx + 1}.png`}
                                alt={`Video ${idx + 1}`}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                                    <FaPlay className="text-yellow-400 text-3xl" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                                {idx === 0 ? '17:18' : idx === 1 ? '24:45' : '19:30'}
                            </div>

                            {idx === 2 && (
                                <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                                    <FaArrowRight className="text-white text-3xl font-semibold " />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedVideos;
