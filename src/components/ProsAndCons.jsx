
const ProsAndCons = () => {
    return (
        <>

            <div className="bg-black text-white font-sans p-8 w-[80%] mx-auto">
                {/* Header Section */}
                <div className="flex w-full justify-center items-center mx-auto ">
                    <div className="w-1/2">
                        {/* Car Image */}
                        <img src="/./images/Car6.png" alt="Car" className="w-full object-cover" />
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-6xl font-bold">Pros <span className="font-thin"> and  </span> Cons</h1>
                        <h2 className="text-3xl mt-2">Take on Mahindra XUV700</h2>
                        <p className="mt-4 text-lg">
                            If you are in the market looking for any kind of  <br />SUV for your family, the XUV700 first gets all the <br /> basics right and then impress you with its <br /> segment-first features.
                        </p>
                    </div>
                </div>

                <hr className="border-gray-600 my-8 w-full mx-auto justify-center items-center" />

                {/* Pros and Cons Section */}
                <div className="flex space-x-16 flex-col mx-auto items-center" >
                    {/* Pros */}
                    <div className="m-4 flex justify-between">
                        <h3 className="text-green-500 text-2xl font-bold mb-4 w-[50%]">Absolutely Amazing</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Road presence - Sheer size with a commanding stance and loads of visual appeal</li>
                            <li>Airy cabin - More spacious than the Alcazar and almost as roomy as the Safari</li>
                            <li>Capable powertrains - The powertrain options effortlessly power the bulky XUV700</li>
                            <li>Unique feel-good features - It offers a range of feel-good features missing from rivals</li>
                        </ul>
                    </div>

                    <hr className="border-gray-600 my-8 w-full mx-auto justify-center items-center" />

                    <div className="m-4 flex justify-between">
                        <h3 className="text-red-500 text-2xl font-bold mb-4 w-[50%]">Could have been Better</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Not the quietest diesel - There's some drivetrain lash when using the throttle</li>
                            <li>Firm ride quality - It’s only at slow speeds that the ride can get bothersome</li>
                            <li>Last row ingress/egress - The absence of a sliding second row limits easy access</li>
                        </ul>
                    </div>


                </div>
            </div>

        </>

    );
}
export default ProsAndCons
