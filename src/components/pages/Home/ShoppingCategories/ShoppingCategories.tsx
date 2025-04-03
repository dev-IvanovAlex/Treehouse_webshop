import React from "react";
import { NavLink } from "react-router-dom";
import leaf from "../../../../assets/images/leaf2.png";

const ShoppingCategories = () => {
  return (
    <div className="mt-36 text-[#50735F] text-center sm:px-[2vw] md:px-[4vw] lg:px-[6vw]">
      <p className="">LET`S MAKE SHOPPING</p>
      <h3 className="mt-1 text-5xl">What are you looking for?</h3>
      <div className="relative">
        <img
          width={1234}
          height={540}
          className="w-full max-h-[540px] mt-10 relative"
          src="../src/assets/images/tops category.png"
          alt=""
        />
        <img className="absolute right-[0] top-[-35px]" src={leaf} alt="leaf" />
      </div>

      <div className="flex mt-6 gap-x-14 justify-center">
        <NavLink to={"/collection/tops"}>TOPS</NavLink>
        <NavLink to={"/collection/bottoms"}>BOTTOMS</NavLink>
        <NavLink to={"/collection/roompers"}>ROOMPERS</NavLink>
        <NavLink to={"/collection/hats"}>HATS</NavLink>
        <NavLink to={"/collection"}>ALL COLLECTION</NavLink>
      </div>
    </div>
  );
};

export default ShoppingCategories;
