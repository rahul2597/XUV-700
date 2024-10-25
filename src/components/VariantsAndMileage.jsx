
import React from 'react';

const VariantsAndMileage = () => {
    return (
        <section className="bg-black text-white py-8 px-4">
            {/* Variants Section */}
            <div className="max-w-6xl mx-auto">
                {/* Tabs for Variants */}
                <div className="flex space-x-8 text-lg font-semibold">
                    <span className="text-yellow-400 border-b-2 border-yellow-400">All Variants</span>
                    <span>Diesel Version</span>
                    <span>Petrol Version</span>
                    <span>Automatic Version</span>
                </div>

                {/* Variant List */}

                <div className='flex  justify-between w-[50%] bg-slate-900 rounded-xl px-6 py-1 text-blue-400 font-normal items-center mt-3'>
                    <h1>Variant</h1>
                    <h1>Price</h1>
                    <div></div>
                </div>
                <div className="mt-4  w-[50%] ">

                    <div className="flex justify-between items-center py-4">
                        <div className="flex flex-col">
                            <span className="font-bold">XUV700 MX</span>
                            <span className="text-gray-400">1999 cc, Manual, Petrol</span>
                            <span className="text-gray-400">More than 2 months waiting</span>
                        </div>
                        <div>
                            <span className="font-bold text-white">Rs.13.18 Lakh*</span> <br />
                            <span className="text-yellow-700">Get On Road Price</span>
                        </div>

                        <div>
                            <button className="mt-2 px-4 py-2 border border-yellow-400 text-yellow-400 rounded-full">View Offers</button>
                        </div>

                    </div>


                    <div className='flex justify-between items-center py-4 gap-10 '>
                        <div className="flex flex-col">
                            <span className="font-bold">XUV700 MX Diesel</span>
                            <span className="text-gray-400">2198 cc, Manual, Diesel</span>
                            <span className="text-gray-400">More than 2 months waiting</span>
                        </div>
                        <div>
                            <span className="font-bold text-white">Rs.13.70 Lakh*</span> <br />
                            <span className="text-yellow-700">Get On Road Price</span>
                        </div>
                        <div>
                            <button className="mt-2 px-4 py-2 border border-yellow-400 text-yellow-400 rounded-full">View Offers</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center py-4 ">
                        <div className="flex flex-col">
                            <span className="font-bold">XUV700 AX3</span>
                            <span className="text-gray-400">1999 cc, Manual, Petrol</span>
                            <span className="text-gray-400">More than 2 months waiting</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="font-bold text-white">Rs.15.28 Lakh*</span>
                            <span className="text-yellow-700">Get On Road Price</span>
                        </div>
                        <div>
                            <button className="mt-2 px-4 py-2 border border-yellow-400 text-yellow-400 rounded-full">View Offers</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <span className="text-yellow-400 cursor-pointer">View More &darr;</span>
                </div>
            </div>

            {/* Mileage Section */}
            <div className="max-w-6xl mx-auto mt-12">
                <h2 className="text-3xl font-semibold mb-4">Mahindra XUV700 Mileage</h2>
                <p className="text-sm text-gray-400 mb-4">The claimed ARAI mileage:</p>
                <p className="text-sm text-gray-400 mb-4">The claimed ARAI mileage for the automatic variants:</p>


                <div>
                    <table className="min-w-full bg-black text-white">
                        <thead>
                            <tr className="bg-gray-700 rounded-3xl ">
                                <th className="py-2 px-4 text-left text-blue-400">Fuel Type</th>
                                <th className="py-2 px-4 text-left text-blue-400">Transmission</th>
                                <th className="py-2 px-4 text-left text-blue-400">ARAI Mileage</th>
                                <th className="py-2 px-4 text-left text-blue-400">City Mileage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">Diesel</td>
                                <td className="py-2 px-4">Manual</td>
                                <td className="py-2 px-4">15.0 kmpl</td>
                                <td className="py-2 px-4">17.0 kmpl</td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="py-2 px-4">Diesel</td>
                                <td className="py-2 px-4">Automatic</td>
                                <td className="py-2 px-4">17.19 kmpl</td>
                                <td className="py-2 px-4">16.57 kmpl</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">Petrol</td>
                                <td className="py-2 px-4">Manual</td>
                                <td className="py-2 px-4">13.0 kmpl</td>
                                <td className="py-2 px-4">15.0 kmpl</td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="py-2 px-4">Petrol</td>
                                <td className="py-2 px-4">Automatic</td>
                                <td className="py-2 px-4">11.0 kmpl</td>
                                <td className="py-2 px-4">13.0 kmpl</td>
                            </tr>
                        </tbody>
                    </table>

                </div>


            </div>
        </section>
    );
};

export default VariantsAndMileage;
