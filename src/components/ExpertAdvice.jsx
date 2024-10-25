
import { FaChevronDown } from 'react-icons/fa';

const ExpertAdvice = () => {
    return (
        <div className="bg-black text-white font-sans p-8 w-[80%] mx-auto">
            <div className='flex justify-center items-center gap-44'>
                <div>
                    <h2 className="text-yellow-400 text-4xl">Here's some</h2>
                    <h1 className="text-6xl font-bold">Expert Advice!</h1>
                    <p className="mt-4 text-lg">
                        With so many segment-first features, drivetrains, <br /> seating and variant options, the XUV700 is trying to <br /> please everyone. But does it get the basics right to <br /> first get into your consideration?
                    </p>
                </div>
                <div>
                    <img src="/./images/Car4.png" alt="" className='w-[500px] h-[500px]' />
                </div>
            </div>



            <div className="flex items-center mt-8 space-x-8">
                <div className="text-yellow-400 font-semibold flex items-center">
                    Exterior <FaChevronDown className="ml-1" />
                </div>
                <div>Interior</div>
                <div>Performance</div>
                <div>Verdict</div>
            </div>

            <hr className="border-gray-600 my-4" />

            <div className="text-lg text-gray-300 flex flex-col justify-center items-center text-[1.5rem] mt-6 relative">
                <p>
                    While the platform is all-new, Mahindra has decided to retain the essence of the XUV500 in the <br /> 700’s design. Paying homage to the 500 are the new headlamps where the “C” shape is maintained <br /> by the LED DRLs. However, these pack an all-LED beam and the indicators are dynamic as well. <br /> Complementing these are more LEDs in the fog lamps, which also feature cornering lights. The <br /> headlamps flow in the slats of the grille which features an aggressive design. The bonnet too gets <br /> strong creases which adds muscle to the front look for the 700. Safe to say, you won’t be confusing <br /> the XUV700 with anything on the road when you see one at night.
                </p>
                <div className="h-[600px] w-[1000px]">
                    <img src="/./images/Car5.png" alt="Car" className=" object-cover transform scale-x-[1]" />
                </div>
                <div className="flex justify-center mt-4 border bg-slate-900 rounded-lg px-3 py-1 absolute top-[90%]">
                    <span className="text-yellow-700 cursor-pointer">View More &darr;</span>
                </div>
            </div>

        </div>
    );
}
export default ExpertAdvice
