import React, { useEffect, useState } from "react";
import Search from "./Search";
import { MdLocationPin } from "react-icons/md";
import { TbTemperatureCelsius } from "react-icons/tb";
import Highlight_Page from "./Highlight_Page";
import moment from "moment";
import TempToggle from "../Pages/TempToggle";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { BiCurrentLocation } from "react-icons/bi";
import "../App.css";

let apiKey = "b1b4155a74dd37c1eb70fbc2b5eaf1c8";

const Home = ({
  data,
  setCity,
  city,
  setTempToggle,
  tempToggle,
  setSearchToggle,
  setLongData,
  longData
}) => {
  const [classToggle, setClassToggle] = useState(true);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  let date = moment(data.dt * 1000).format("ll");

  console.log(data);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      console.log(position);
    });
    setLongData({ lat: lat, lon: lng });
    console.log(lat);
    
  };

  return (
    <>
      {data === "" ? (
        <div className="  ">
          <h2 className="flex justify-center items-center">Loading...</h2>
        </div>
      ) : (
        <>
          <div className="  text-white  basis-1/4 w-screen h-screen   bg-[#1e213a] flex   flex-col p-6 ">
            <div className="w-[100%] h-[20px] flex justify-around  mt-7  ">
              <button
                onClick={() => setSearchToggle(false)}
                className="w-[140px] h-[40px] bg-[gray] shadow-lg  "
              >
                Search for place
              </button>
              <button onClick={getLocation} className="w-[40px] h-[40px] rounded-[54px] bg-[gray] flex justify-center items-center ">
                <BiCurrentLocation  />
              </button>
            </div>
            <TempToggle
              setTempToggle={setTempToggle}
              setClassToggle={setClassToggle}
              classToggle={classToggle}
            />

            <div className="flex justify-center items-center flex-col mt-20 ">
              <img
                src={`./image/${!data ? "02d" : data?.weather[0]?.icon}.png`}
                className="w-60 h-60 rounded-[50%] mt-6 mb-20 "
                alt="temp-logo"
              />
              <div className="flex">
                <h3 className=" font-medium text-[150px] ">
                  {!tempToggle
                    ? data?.main?.temp.toFixed(0)
                    : ((data?.main?.temp.toFixed(0) * 9) / 5 + 32).toFixed(0)}
                </h3>
                <span className="text-4xl p-2 ">
                  {!tempToggle ? (
                    <TbTemperatureCelsius className="text-[50px] text-slate-400 " />
                  ) : (
                    <TbTemperatureFahrenheit className="text-[50px] text-slate-400 " />
                  )}
                </span>
              </div>
              <h4 className="text-3xl mt-7 shadow-md font-extra-light text-gray-400 ">
                {data && data.weather[0].main}
              </h4>
              <div className="flex w-40 justify-between text-gray-400 mt-8 ">
                <p>Today</p>
                <p> {data && date}</p>
              </div>
              <h4 className="flex p-7 text-lg text-gray-400 ">
                <MdLocationPin className="mx-2 text-2xl" />
                <p className="mx-2">{data && data.name} </p>
                <span> {data && data.sys.country}</span>
              </h4>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
