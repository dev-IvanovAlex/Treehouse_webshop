import { useState } from "react";
import ButtonWithArrow from "../../../ButtonWithArrow/ButtonWithArrow";
import Arrow from "../../../SVG/Arrow/Arrow";
import Vector from "../../../SVG/Vector";

const Hero = () => {
  const [showVector, setShowVector] = useState(false);
  return (
    <section
      className="bg-no-repeat bg-[40%] md:bg-center bg-cover w-full h-[100vh] text-white  px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] "
      style={{ backgroundImage: "url(../src/assets/images/bg_home.png)" }}
    >
      <div className="h-full">
        <div className=" max-w-[600px] absolute top-[45%] left-[40%] md:left-[50%] translate-y-[-50%] ">
          <p className="font-normal text-sm">TREEHOUSE:</p>
          <h1 className="text-3xl md:text-6xl text-left">Little Clothes.</h1>
          <h1 className="text-3xl md:text-6xl relative left-[-17%]  ">
            Big Impact.
          </h1>
          <p className="text-sm pt-5 max-w-[314px] ">
            High-quality children's clothing, crafted with care from sustainable
            materials that are kind to the planet. These timeless styles are the
            perfect companions for your little adventurer, wherever their
            imagination takes them. 
          </p>
          <ButtonWithArrow
            buttonStyles=" text-white bg-[#C58A46] text-nowrap group-hover:bg-[#ffa136] group-hover:text-[#726454] group-active:bg-[#50735F] group-active:text-white transition-all"
            arrowRoundedStyles="bg-[#C58A46] group-hover:bg-[#ffa136]  group-active:bg-[#50735F] transition-all"
            arrowStyle="[&>path]:fill-white [&>path]:group-hover:fill-[#726454] [&>path]:group-active:fill-white [&>path]:transition-all"
          />
        </div>
        <div className="absolute bottom-[5%] left-0 right-0 flex justify-between items-ce  px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%]">
          <p>*Buy good, do good</p>
          <button
            onMouseEnter={() => setShowVector(true)}
            onMouseLeave={() => setShowVector(false)}
            className="relative inline-flex items-center gap-x-1 group w-[100px] h-[60px] "
          >
            <p className="group-hover:text-[#C58A46] group-active:text-[#ffa136]">
              Scroll
            </p>
            <Arrow
              style={
                "rotate-90 [&>path]:fill-white [&>path]:group-hover:fill-[#C58A46] [&>path]:group-active:fill-[#ffa136] w-[40px] h-[40px]"
              }
            />

            <div className="w-full h-full">
              <Vector
                style={`${
                  showVector ? "opacity-100" : "opacity-0"
                } absolute left-[-25px] top-[-3px]  transition-all w-full h-full`}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
