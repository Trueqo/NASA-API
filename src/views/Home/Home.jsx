import React from "react";
import data from "../../data/dataHome";
const Home = () => {
    return (
        <div className="">
            {data.map((cards, id) => (
                <div className="flex  justify-center  px-[4rem] pt-[4rem] pb-[8rem] relative" key={id}>
                    <div className="flex flex-col bg-gray-300 items-center rounded-2xl border border-gray-400 px-[1rem]">
                        <h1 className="font-bold text-[3rem]">{cards.title}</h1>
                        <p className="text-[2rem]">{cards.description}</p>
                        <h1 className="text-red-600 text-[2rem] ">{cards.icon}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
