import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import CloseIcon from "@mui/icons-material/Close";

const Search = ({ setCity, city, setSearchToggle,handleSubmit,setInputdata,setLongData,inputdata }) => {
  const [searchData, setSearchData] = useState([]);
  


  const handleChange = (e) => {
    //setCity(e.target.value);
    setInputdata(e.target.value);
    
    console.log(inputdata);
    console.log(city);
   
  };
  let apiKey = "b1b4155a74dd37c1eb70fbc2b5eaf1c8";
  const fetchdata = async () => {
    let res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${inputdata === '' ?  "p" : inputdata}&limit=${5}&appid=${apiKey}`
    );
    res = await res.json();
    console.log(res);
    setSearchData(res);
  };

  useEffect(() => {
    fetchdata();
  }, [inputdata]);

 const dropDownSelect = (val) =>{
  // setListData(e.target.value)
  setInputdata(val.name);
  setLongData(val);
  console.log(val);
 }
  return (
    <div className="  text-white  basis-1/4 w-screen h-[100vh]    bg-[#1e213a] flex   flex-col    ">
      <div className="flex justify-end mr-12 mt-4">
        <CloseIcon onClick={() => setSearchToggle(true)} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[100%] flex justify-around relative top-7 "
      >
        <input
          placeholder="Search location"
          type="text"
          value={inputdata}
          onChange={handleChange}
          className=" capitalize w-[70%] min-w-[200px] bg-slate-700 text-white h-[48px]  pl-[45px] relative  mt-5 mr-2 "
        />
        <BiSearchAlt2 className=" absolute top-[40px] sm:left-[45px] text-slate-100 left-[20px] text-lg " />
        <button className=" w-[86px] h-[48px] bg-[#3C47E9] text-[white]  mt-5">
          Search
        </button>
      </form>
      <div className="w-[100%]  mb-1 p-5 flex justify-center items-center flex-col  ">
      
        {searchData.length === 0 ? (
          <h2 className="flex justify-center items-center text-3xl text-[#c8da63] " > No match</h2>
        ) : (
          searchData &&  searchData?.map((val, i) => {
            return (
              <ul className=" w-[100%] capitized  m-3 text-slate-400 flex justify-start  items-center ">
                <li
                  onClick={() => dropDownSelect(val)}
                 
                  className=" p-2 text-lg hover:text-slate-200 cursor-pointer "
                >
                  {val.name} ,{val.country}
                </li>
              </ul>
            );
          })
        )}
      </div>

      {/* <debounce /> */}
    </div>
  );
};

export default Search;
