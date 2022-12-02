import moment from "moment";
import React, { useEffect, useState } from "react";
import HighlightPage from "./Components/Highlight_Page";
import Home from "./Components/Home";

import Search from "./Components/Search";
import TempToggle from "./Pages/TempToggle";

const App = () => {
  const [data, setData] = useState("");
  const [city, setCity] = useState("bangalore");
  const [inputdata, setInputdata] = useState("");
  const [forcast, setForcast] = useState([]);
  const [tempToggle, setTempToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(true);
  const [longData, setLongData] = useState({
    lat: 12.9791,
    lon: 77.5913,
  });
console.log(longData)
  let apiKey = "b1b4155a74dd37c1eb70fbc2b5eaf1c8";

  

  /**
   * 
    const forcastFetchData = async () => {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${longData.lat}&lon=${longData.lon}&appid=${apiKey}&units=metric`
    );
    res = await res.json();
    console.log(res);
    if (res.cod !== "200") {
      return;
    } else {
      setForcast(res);
    }
  };

    const fetchData = async () => {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${longData.lat}&lon=${longData.lon}&appid=${apiKey}&units=metric`
    );
    res = await res.json();
    if (res.cod === 200) {
      setData(res);
    }

    // console.log(res);
  };
   */
  const forcastFetchData = async () => {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${longData.lat}&lon=${longData.lon}&appid=${apiKey}&units=metric`
    );
    res = await res.json();
    console.log(res);
    if (res.cod !== "200") {
      return;
    } else {
      setForcast(res);
    }
  };

  const fetchData = async () => {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${longData.lat}&lon=${longData.lon}&appid=${apiKey}&units=metric`
    );
    res = await res.json();
    if (res.cod === 200) {
      setData(res);
    }

    // console.log(res);
  };

  /**  Debouncing */
  useEffect(() => {
    const getClearTime = setTimeout(() => {
      fetchData();
      forcastFetchData();
    }, 1000);
    return () => {
      clearTimeout(getClearTime);
    };
  }, [longData]);

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData();
    forcastFetchData();
    // console.log(inputdata);
    setInputdata('');
    setSearchToggle(true);
  };
  return (
    <div>
      {!data ? (
        <h2 className="text-5xl text-[#44ced8] flex justify-center items-center ">Loading...</h2>
      ) : (
        <div className="flex w-full flex-col lg:flex-row ">
          {searchToggle ? (
            <Home
              data={data}
              city={city}
              setCity={setCity}
              setTempToggle={setTempToggle}
              tempToggle={tempToggle}
              setSearchToggle={setSearchToggle}
              setLongData={setLongData}
            />
          ) : (
            <Search
              setSearchToggle={setSearchToggle}
              handleSubmit={handleSubmit}
              setInputdata={setInputdata}
              inputdata={inputdata}
              setLongData={setLongData}
            />
          )}

          <HighlightPage
            forcast={forcast}
            data={data}
            city={city}
            weekDays={weekDays}
            tempToggle={tempToggle}
          />
        </div>
      )}
    </div>
    // <Sample />
  );
};

export default App;
