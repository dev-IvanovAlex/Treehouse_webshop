import React from "react";
import ButtonWithArrow from "../../../ButtonWithArrow/ButtonWithArrow";

const Discount = () => {
  return (
    <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 mt-[108px] sm:px-[2vw] md:px-[4vw] lg:px-[6vw] mb-[160px]">
      <div className=" bg-[#ADBBC4] text-white text-center min-h-[560px]">
        <div className="relative h-full  max-w-[315px] m-auto ">
          <img
            className="max-h-[76px] mt-[38px] m-auto"
            src="../src/assets/images/Group 2074.svg"
            alt=""
          />
          <p className="font-['Northwell'] text-6xl mt-[38px]">25% off</p>
          <p className="mt-[12px]">
            Save yourself the headache of endless shopping with our Capsule
            Collection. Buy all 14 pieces, save 25%, and enjoy endless outfit
            options, dressing your littles in no time!
          </p>
          <ButtonWithArrow
            buttonStyles="bg-[#C58A46] text-nowrap group-hover:bg-[#ffa136] group-hover:text-[#726454] group-active:bg-[#50735F] group-active:text-white transition-all"
            arrowRoundedStyles="bg-[#C58A46] group-hover:bg-[#ffa136]  group-active:bg-[#50735F] transition-all"
            arrowStyle="[&>path]:fill-white [&>path]:group-hover:fill-[#726454] [&>path]:group-active:fill-white [&>path]:transition-all"
          />
          <img
            className="absolute bottom-[-60%] left-[50%] translate-x-[-50%] sm:translate-x-[0]  sm:bottom-[-110px] sm:left-[10px] max-h-[180px] sm:max-h-[256px]"
            src="../src/assets/images/Frame 2060.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="h-full">
          <img
            className="object-cover h-full"
            src="../src/assets/images/Frame 2059.png"
            alt=""
          />
        </div>
        <div className="flex ">
          <p className="text-[#C58A46] font-[Northwell] text-[100px] relative top-[-10px]">
            *
          </p>
          <p className="uppercase max-w-[400px] text-[#50735F] text-sm  mt-4">
            The entire collection has a gender-neutral style and every item
            matches perfectly with the next.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
