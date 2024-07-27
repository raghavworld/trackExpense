import React, { useState } from "react";

const Corousel = () => {
  const corsouselArray = [
    {
      id: 1,
      author: "Corousel 1",
      info: "This app has revolutionized the way I track my expenses. Highly intuitive and user-friendly",
    },
    {
      id: 2,
      author: "Corousel 2",
      info: "This app has revolutionized the way I track my expenses. Highly intuitive and user-friendly",
    },
    {
      id: 3,
      author: "Corousel 3",
      info: "This app has revolutionized the way I track my expenses. Highly intuitive and user-friendly",
    },
    {
      id: 4,
      author: "Corousel 4",
      info: "This app has revolutionized the way I track my expenses. Highly intuitive and user-friendly",
    },
    {
      id: 5,
      author: "Corousel 5",
      info: "This app has revolutionized the way I track my expenses. Highly intuitive and user-friendly",
    },
    {
      id: 6,
      author: "Corousel 6",
      info: "This app has revolutionized the way I track my expenses. Highly intuitive and user-friendly",
    },
    {
      id: 7,
      author: "Corousel 7",
      info: "This app has revolutionized the way I track my expenses. Highly intuitive and user-friendly",
    },
  ];

  const [curr, setCurr] = useState(0);
  const prevCard = () => {
    setCurr((prev) => (curr === 0 ? corsouselArray.length - 1 : prev - 1));
  };
  const nextCard = () => {
    setCurr((prev) => (curr === corsouselArray.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" bg-white items-center  flex flex-col">
      <div className="carousel h-[300px] carousel-center md:max-w-4xl md:h-[400px] bg-white rounded-box max-w-full space-x-4 p-4">
        {corsouselArray.map((item, index, arr) => (
          <div
            key={"item" + index + 1}
            className="carousel-item max-w-44 md:max-h-full md:max-w-sm flex-col focus:scale-110  hover:scale-110   duration-200 p-6  bg-white rounded-lg shadow-2xl"
          >
            <h2 className="text-xl text-wrap items-center font-bold mb-2">
              {"-" + item.author}
            </h2>
            <p className="text-gray-700 bg-red-100 ">{item.info}</p>
          </div>
        ))}
      </div>

      <div className=" justify-center m-5  gap-8 flex flex-row btn-container">
        <button
          onClick={prevCard}
          className="   size-3/12 hover:scale-110  duration-300 bg-red-500 prev-btn"
        >
          Prev
        </button>

        <button
          onClick={nextCard}
          className="  size-3/12 hover:scale-110  duration-300  bg-yellow-400 prev-btn"
        >
          Next
        </button>

        <div />
      </div>
    </div>
  );
};

export default Corousel;
