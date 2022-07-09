import { useState, useEffect } from "react";

const Test = () => {
  const [data, setData] = useState({});
  const [changeDate, setchangeDate] = useState("1999-10-18");

  URL = `https://api.nasa.gov/planetary/apod?api_key=LPArlu4Ukbhiv15PcdHR4egCSz987t42gYIdJyBY&date=${changeDate}&concept_tags=True`;

  const callApi = async (URL) => {
    const apod = await fetch(URL);
    const dataApod = await apod.json();
    setData(dataApod);
  };
  useEffect(() => {
    callApi(URL);
  }, [changeDate]);

  return (
    <div
      className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1
    min-h-screen "
    >
      <div className="md:col-start-1 md:col-end-2 py-[6rem] ">
        <div className="flex flex-col h-[100%] justify-center items-center pb-[4rem]">
          <h1 className="font-bold text-2xl">Ingrese la fecha:</h1>
          <input
            type="date"
            onChange={(e) => setchangeDate(e.target.value)}
            className="border-2 border-black p-2 my-[1rem] rounded-2xl bg-[#555555]
            text-white font-bold" />
          <h1 className="font-bold">
          Fecha ingresada:ㅤ
            <span className="font-bold text-red-600">
            {data.date}
            </span>
          </h1>
          <h1 className="font-bold text-[#0066b2] py-4">
            {data.title}
          </h1>
          <img src={data.url} className='w-[75%] h-[60%] mt-1' />
        </div>
      </div>
      <div className="bg-violet-600 md:col-start-2 md:col-end-3"></div>

      {/* <span className={CSS.titleDate}>
          Ingresa la fecha:
        </span>
        <input type="date" onChange={(e) => setchangeDate(e.target.value)}
          className={CSS.inputDate}/>
        <h1>{data.date}</h1>
        <h1>{data.title}</h1>
        <img src={data.url}/> */}
    </div>
  );
};

export default Test;
