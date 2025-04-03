import React from "react";
import Arrow from "../../../SVG/Arrow/Arrow";
import ArrowRounded from "../../../SVG/Arrow/ArrowRounded";
import ButtonWithArrow from "../../../ButtonWithArrow/ButtonWithArrow";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-center bg-cover w-full h-[100vh] text-white  px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] "
      style={{ backgroundImage: "url(../src/assets/images/bg_home.png)" }}
    >
      <div className="h-full">
        <div className=" max-w-[600px] absolute top-[50%] left-[50%] translate-y-[-50%] ">
          <p className="font-normal text-sm">TREEHOUSE:</p>
          <h1 className="text-6xl text-left">Little Clothes.</h1>
          <h1 className="relative left-[-17%] text-6xl ">Big Impact.</h1>
          <p className="text-sm pt-5 max-w-[314px] ">
            High-quality children's clothing, crafted with care from sustainable
            materials that are kind to the planet. These timeless styles are the
            perfect companions for your little adventurer, wherever their
            imagination takes them. 
          </p>
          <ButtonWithArrow
            buttonStyles="bg-[#C58A46]"
            arrowRoundedStyles="bg-[#C58A46]"
            arrowStyle="[&>path]:fill-white"
          />
        </div>
        <div className="absolute bottom-[5%] left-0 right-0 flex justify-between  px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%]">
          <p>*Buy good, do good</p>
          <button className="inline-flex items-center">
            <p>Scroll</p>
            <img
              className="rotate-90"
              src="../src/assets/images/right-arrow.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
