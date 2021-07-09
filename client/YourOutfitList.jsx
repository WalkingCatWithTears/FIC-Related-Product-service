import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from 'nuka-carousel';
import CloseIcon from "@material-ui/icons/Close";



import Comparison from "./Comparison.jsx";

export default function YourOutfitList(props) {
  const [isToggled, setisToggled] = useState(false);
  const [outfits, setoutfits] = useState([]);

  const clickandle = (boolean) => {
    setisToggled(boolean);
  };

  const toggleComparison = () => {
    if (isToggled) {
      return <Comparison exit={clickandle} />;
    } else {
      return;
    }
  };

  return (
    <>
    <h1 className="flex px-48 font-mono pt-11 pr-2 "> YOUR OUTFIT</h1>
    <div className="relative py-3 sm:max-w-full px-48 pt-11">
      <div className="flex flex-col bg-white m-auto p-auto">
        <div className="flex ">
          <Carousel slidesToShow={3.5} withoutControls={true} >
          {props.outfitsData.map((e) => (
            <div
              className="inline-block px-3  "
              key={e.data.id}
              onClick={() => clickandle(true)}
            >
              {console.log(e.data, props.outfitsData,"hellllllooo")}
              <div className=" w-56 h-72 max-w-xs overflow-hidden  shadow-md bg-white  transition-shadow duration-300 ease-in-out border-2 hover:bg-white hover:shadow-lg hover:border-transparent">
                <div>
                <div className=" top-0 right-0">
                    <CloseIcon
                      onClick={() =>props.removeOutfit(e) }
                    />
                  </div>
                  <img
                    className="rounded"
                    src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                    alt="hello"
                  />
                  <div className="mt-2">
                    <div>
                      <div className="text-xs text-gray-600 uppercase font-bold">
                        {e.data.category}{" "}
                      </div>
                      <div className="font-bold text-gray-700 leading-snug">
                        <a href="#" className="hover:underline">
                          {e.data.name}
                        </a>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        ${e.data.default_price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </Carousel>
        </div>
      </div>

      {toggleComparison()}
    </div></>
  );
}
