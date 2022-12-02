import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb'

const ErrorPage = () => {
  return (
    <>
    
      <>
        <div className=" bg-scroll text-white lg:w-[30%] lg:h-[100vh] md:w-[100%]   bg-[#1e213a] flex lg:justify-center lg:items-center flex-col p-6  ">
          <div className="flex justify-center items-center flex-col ">
            {/* <Search city={city} setCity={setCity} />
            <TempToggle setTempToggle={setTempToggle} setClassToggle={setClassToggle} classToggle={classToggle} /> */}
          </div>
          <div className="flex justify-center items-center flex-col ">
            <img
            //   src={`./image/${!data? "02d":data?.weather[0]?.icon}.png`}
              className="w-20 h-20 rounded-[50%] mt-6 mb-20 "
              alt="temp-logo"
            />
            <div className="flex">
              <h3 className=" font-medium text-9xl ">
                {/* {!tempToggle
                  ? data?.main?.temp.toFixed(0)
                  :((data?.main?.temp.toFixed(0) * 9/5)  + 32).toFixed(0)} */}
              </h3>
              <span className="text-4xl p-2 ">
                {/* {!tempToggle ? (
                  <TbTemperatureCelsius   />
                ) : (
                  <TbTemperatureFahrenheit  />
                )} */}
              </span>
            </div>
            <h4 className="text-3xl mt-7 shadow-md font-extra-light text-gray-400 ">
              {/* {data && data.weather[0].main} */}
            </h4>
            <div className="flex w-40 justify-between text-gray-400 mt-8 ">
              <p>Today</p>
              <p> </p>
            </div>
            <h4 className="flex p-7 text-lg text-gray-400 ">
              {" "}
              <MdLocationPin className="mx-2 text-2xl" />
              <p></p>
            </h4>
          </div>
        </div>
      </>
    
  </>
  )
}

export default ErrorPage
