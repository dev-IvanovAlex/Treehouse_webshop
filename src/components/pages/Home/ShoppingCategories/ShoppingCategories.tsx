import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import leaf from "../../../../assets/images/leaf2.png";
import tops from "../../../../assets/images/tops category.png";
import bottoms from "../../../../assets/images/bottoms.png";
import roompers from "../../../../assets/images/roompers.png";
import hats from "../../../../assets/images/hats.png";
import allCollection from "../../../../assets/images/allCollection.png";
import Vector from "../../../SVG/Vector";

const ShoppingCategories = () => {
  const [currentUrlImage, setCurrentUrlImage] = useState(tops);
  const [vectorVisible, setVectorVisible] = useState(false);
  const categories = [
    { id: 1, name: "tops", category: "tops", url: tops },
    { id: 2, name: "bottoms", category: "bottoms", url: bottoms },
    { id: 3, name: "roompers", category: "roompers", url: roompers },
    { id: 4, name: "hats", category: "hats", url: hats },
    {
      id: 5,
      name: "all collection",
      category: "collection",
      url: allCollection,
    },
  ];

  const handleHover = (item) => {
    setCurrentUrlImage(item.url);
    setVectorVisible(item);
  };

  return (
    <div className="mt-20 sm:mt-36 text-[#50735F] text-center px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] max-w-[1200px] m-auto">
      <p className="">LET`S MAKE SHOPPING</p>
      <h3 className="mt-1 text-3xl sm:text-5xl">What are you looking for?</h3>
      <div className="relative">
        <img
          width={1234}
          height={540}
          className="w-full max-h-[540px] mt-10 relative object-cover"
          src={currentUrlImage}
          alt=""
        />
        <img
          className="absolute right-[0] top-[-20px] sm:top-[-35px] w-[120px] h-[40px] sm:w-[164px] sm:h-[64px]"
          src={leaf}
          alt="leaf"
        />
      </div>

      <div className="flex mt-7 gap-x-7 gap-y-4 sm:gap-x-14 justify-center *:text-nowrap flex-wrap">
        {categories.map((item) => {
          return (
            <div className=" relative">
              <Vector
                style={`${
                  vectorVisible.category === item.category
                    ? "opacity-100"
                    : "opacity-0"
                } absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  w-[calc(100%+20px)] h-auto [&>path]:fill-[#ffa136] transition-all `}
              />
              <div className=" flex justify-center items-center overflow-hidden">
                <NavLink
                  className="z-[1] hover:text-[#C58A46] active:text-[#ffa136]"
                  onMouseMove={() => handleHover(item)}
                  onMouseLeave={() => setVectorVisible({})}
                  to={`/collection/${item.category}`}
                >
                  {item.name.toUpperCase()}
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingCategories;
