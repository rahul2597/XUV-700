import React from 'react'

const Section = () => {
    return (
        <>
            <section className="relative bg-black text-white flex justify-center items-center h-screen">

                <div >
                    <img src="/./images/XUV700.png" alt="" className='xuv700 w-[1000px] opacity-[65%] top-[10%] left-[25%] absolute text-[#55C2FF]' />
                </div>
                <div className=' w-[930px] object-contain absolute top-[25%] opacity-90 flex justify-center items-center '>
                    <img
                        src="/./images/XUV700CAR.png"
                        alt="Car"
                        className="w-full"
                    />
                    <img src="/./images/CarText.png " alt=""  className=' absolute '/>
                </div>

            </section>
        </>
    )
}

export default Section