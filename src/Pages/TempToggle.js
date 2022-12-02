import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";

import { TbTemperatureFahrenheit } from "react-icons/tb";
const TempToggle = ({ setTempToggle, setClassToggle, classToggle }) => {
  const handleCelius = () => {
    //setClassToggle(false)
    setTempToggle(false);
    setClassToggle(true);
  };
  const handleFahrenheit = () => {
    setTempToggle(true);
    setClassToggle(false);
  };
  return (
    <div className=" lg:absolute lg:right-[400px] lg:top-[60px] sm:absolute top-2 right-2 flex    sm:text-black text-3xl justify-center items-center  max-[450px]:absolute max-[450px]:right-1 max-[450px]:top-0  ">
      <TbTemperatureCelsius
        onClick={handleCelius}
        className={` w-[40px]  h-[40px]   max-[450px]:w-[30px] max-[450px]:h-[30px] mx-4 text-[18px]   rounded-[54px] bg-[#767679] text-[#f6f5fa] font-bold   cursor-pointer mb-0 ${
          classToggle ? "activ" : null
        } `}
      />
      <TbTemperatureFahrenheit
        onClick={handleFahrenheit}
        className={` w-[40px]  h-[40px] position-absolute left-[1223px]  top-[42px]  max-[450px]:w-[30px] max-[450px]:h-[30px] mx-4 text-[18px]   rounded-[54px] bg-[#767679] text-[#f6f5fa] font-bold   cursor-pointer mb-0  ${
          !classToggle ? "activ" : null
        } `}
      />
    </div>
  );
};

export default TempToggle;
