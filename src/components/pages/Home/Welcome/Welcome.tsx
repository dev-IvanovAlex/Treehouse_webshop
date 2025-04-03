import React from "react";
import H2text from "../../../H2text";
import ButtonWithArrow from "../../../ButtonWithArrow/ButtonWithArrow";

const Welcome = () => {
  return (
    <section className="grid grid-cols-[60%_40%]  mt-[120px]  text-[#50735F] sm:px-[2vw] md:px-[4vw] lg:px-[6vw]">
      <img
        className="max-h-[517px] ml-auto"
        src="../src/assets/images/Comp1.png"
        alt=""
      />
      <div className="max-w-[280px] mt-8 ml-8">
        <p>WELCOME</p>
        <h2 className="pt-[13px] text-5xl">Hi, meet TreeHouse.</h2>
        <p className="mt-4 text-sm">
          Mindfully crafted gender-neutral children's clothing focused on your
          little one and designed with great care for our planet and the people
          on it.
        </p>
        <div className=" inline-flex mt-12 cursor-pointer text-[#50735F]">
          <ButtonWithArrow
            arrowRoundedStyles={"border-2 border-[#50735F]"}
            buttonStyles={"border-2 border-[#50735F] text-[#50735F]"}
            arrowStyle={"[&>path]:fill-[#50735F]"}
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
