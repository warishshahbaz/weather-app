import React, { useState } from "react";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import { TiLocationArrow } from "react-icons/ti";
//import LinearProgressWithLabel from "../Components/Progress";
import { ProgresBar } from "./Progress";
import moment from "moment";

const HighlightPage = ({ data, city, weekDays, forcast, tempToggle }) => {
  const [progress, setProgress] = React.useState(10);
  const [dateVal, setDataVal] = useState({});

  React.useEffect(() => {
    setProgress(data?.main.humidity);
  }, [city]);
  let day = new Date().getDay();
  let toDayMilli = new Date().getTime();

  return (
    <div className=" basis-3/4 w-screen h-screen  bg-[#100f0f] flex justify-center items-center   text-white flex-wrap ">
      <div className="  flex flex-col w-[990px]    justify-center items-center   ">
        <div className="flex  md:w-[100%] justify-center items-center max-[450px]:flex-wrap  ">
          {forcast.list?.slice(0, 5).map((val, i) => {
            day++;
            if (weekDays.length === day) {
              day = 0;
            }

            let nextDay = 24 * 3600 * 1000;
            toDayMilli = toDayMilli + nextDay;
            return (
              <div
                key={i}
                className="   m-2 w-[120px]  flex justify-between  p-2 items-center flex-col  h-[177px] bg-[#1e213a] max:[450px]:flex-col font-raleway  "
              >
                <div className=" w-[100%] text-slate-300 h-[19px] flex justify-around leading-[18.78px]  ">
                  <p className="text-[14px] font-normal">{weekDays[day]}</p>
                  <p className="text-[14px] font-normal">
                    {moment(toDayMilli).format("MMM Do")}
                  </p>
                </div>

                <img
                  src={`./image/${val.weather[0].icon}.png`}
                  className="w-[53.56px] h-[62px]"
                  alt="logo"
                />
                <div className="flex w-[100%]  text-lg  justify-around  text-gray-400">
                  <div className="flex">
                    <p className=" w-[15px] h-[19px] text-[#E7E7EB] text-[16px] font-normal leading-[18.78px] ">
                      {tempToggle
                        ? ((val.main?.temp_min * 9) / 5 + 32).toFixed(0)
                        : (val.main?.temp_min).toFixed(0)}
                    </p>
                    <span className="p-0" >
                      {!tempToggle ? (
                        <TbTemperatureCelsius />
                      ) : (
                        <TbTemperatureFahrenheit />
                      )}
                    </span>
                  </div>
                  <div className="flex">
                    <p className=" w-[15px] h-[19px] text-[#E7E7EB] text-[16px] font-normal leading-[18.78px] ">
                      {tempToggle
                        ? ((val.main?.temp_max * 9) / 5 + 32).toFixed(0)
                        : (val.main?.temp_max).toFixed(0)}
                    </p>
                    <span className="p-0" >
                      {!tempToggle ? (
                        <TbTemperatureCelsius />
                      ) : (
                        <TbTemperatureFahrenheit />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex   w-[990px]  justify-start items-center  flex-wrap max-[450px]:w-[100%] max-[450px]:mr-5 flex-col  ">
          <div className=" w-[690px]  flex flex-col max-[450px]:w-[90%] max-[450px]:items-center max-[450px]:justify-center justify-center items-start  ">
            <h2 className="text-[24px] font-bold mb-6 max-[450px]:mr-5 ">
              Today's Highlights
            </h2>
            <div className="flex justify-center flex-wrap ">
              <div className=" w-[328px] h-[204px]  flex justify-between items-center flex-col p-2 bg-[#1e213a] max-[450px]:w-[100%] m-2 ">
                <p className="text-lg w-[90px] h-[19px] position-absolute left-[737px] top-[479px] font-sarif letter tracking-wide font-normal text-[16px] leading-[19px] ">
                  Wind Status
                </p>
                <div className="flex justify-center items-center position-absolute left-[725px] top-[504px]   ">
                  <h1 className="font-bold text-[64px]">
                    {data && data.wind.speed.toFixed(1)}
                  </h1>
                  <span>mph</span>
                </div>
                <div className=" flex p-3 text-gray-400">
                  <TiLocationArrow className="mx-5 text-lg rotate-[-150deg] border-2 w-4 bg-[#E7E7EB] rounded-[50%] bg-[black]" />
                  <p className="position-absolute left-[71p%] right-[-30.62%] top-[113.36%] bottom-[-84.17%]   ">
                    wsw
                  </p>
                </div>
              </div>
              <div className=" w-[328px] h-[204px] flex justify-between items-center flex-col p-3 bg-[#1e213a] max-[450px]:w-[100%] m-2 ">
                <p className="text-lg w-[90px] h-[19px] position-absolute left-[737px] top-[479px] font-sarif letter tracking-wide font-normal text-[16px] leading-[19px] ">
                  Humidity
                </p>
                <div className="flex justify-center items-center position-absolute left-[725px] top-[504px]  ">
                  <h1 className="font-bold text-[64px]">
                    {data && data.main.humidity}{" "}
                  </h1>
                  <span>%</span>
                </div>
                <div className=" flex p-3 ">
                  <ProgresBar value={data.main.humidity} />
                </div>
              </div>
              <div className=" w-[328px] h-[204px] flex justify-between items-center flex-col p-3 bg-[#1e213a] max-[450px]:w-[100%] m-2 ">
                <p className="text-lg w-[90px] h-[19px] position-absolute left-[737px] top-[479px] font-sarif letter tracking-wide font-normal text-[16px] leading-[19px] ">
                  Visibilty
                </p>
                <div className="flex justify-center items-center ">
                  <h1 className="font-bold text-[64px]">
                    {data && (data.visibility * 4) / 1000}
                  </h1>
                  <span>Km</span>
                </div>
              </div>

              <div className="w-[328px] h-[204px] flex justify-between items-center flex-col p-3 bg-[#1e213a] max-[450px]:w-[100%] m-2">
                <p className="text-lg w-[90px] h-[19px] position-absolute left-[737px] top-[479px] font-sarif letter tracking-wide font-normal text-[16px] leading-[19px]">
                  Air Pressure
                </p>
                <div className="flex justify-center items-center ">
                  <h1 className="font-bold text-[64px]">
                    {data && data.main.pressure}{" "}
                  </h1>
                  <span>mb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightPage;
