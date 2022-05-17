import { useState, useEffect } from "react";
import css from "../ContainerCardApodLeft/ContainerCardApodLeft.module.css";
const ContainerCardApodLeft = () => {
  const [data, setData] = useState({});
  let url =
    "https://api.nasa.gov/planetary/apod?api_key=LPArlu4Ukbhiv15PcdHR4egCSz987t42gYIdJyBY";

  const callApi = async (url) => {
    const apod = await fetch(url);
    const data = await apod.json();
    setData(data);
  };
  useEffect(() => {
    callApi(url);
  }, []);
  console.log(data);

  return (
    <div className={css.ContainerCardApodLeft}>
      <div className={css.info}>
        <h1 className={css.especialTitle}>About image</h1>
        <p className={css.text}>{data.explanation}</p>
        <h1 className={css.especialTitle}>{data.date}</h1>
      </div>
    </div>
  );
};

export default ContainerCardApodLeft;
