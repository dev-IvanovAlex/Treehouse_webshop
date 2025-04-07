import React from "react";

const OurCare = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 gap-x-2 text-[#50735F] mt-[150px] px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%]">
      <div className="flex flex-col justify-between items-center">
        <div className="max-w-[425px]">
          <p className="text-sm">OUR CARE</p>
          <h2 className="text-4xl sm:text-5xl">
            We prioritize your peace of mind.
          </h2>
          <div className="flex mt-10">
            <p className="font-[Northwell] text-4xl">1</p>
            <p className="text-xl pl-2">SAVING YOUR TIME </p>
          </div>
          <p className="text-sm pt-4 ">
            Each item in our collection seamlessly matches the next. Invest in a
            few pieces or the entire line for a season's worth of clothing
            options, designed to last and be loved by others once your little
            one has grown.
          </p>

          <div className="flex mt-8">
            <p className="font-[Northwell] text-4xl">2</p>
            <p className="text-xl pl-2">ETHICAL MANUFACTURING</p>
          </div>
          <p className="text-sm pt-4 max-w-[360px]">
            Our commitment to ethical production isn’t just rhetoric. We place
            the welfare of workers and the environment at the forefront of our
            decision making. Always.
          </p>
        </div>
        <div className="mb-20 sm:mb-0">
          <img
            className="max-h-[260px] mt-2 sm:mt-0 sm:m-auto"
            src="../src/assets/images/Comp2.svg"
            alt=""
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center sm:items-end ">
        <img
          className="absolute top-[-90px] right-0 z-1"
          src="../src/assets/images/wand.png"
          alt=""
        />
        <div className="w-full">
          <img
            className=" max-h-[485px] ml-auto w-full object-cover"
            src="../src/assets/images/Comp3.png"
            alt=""
          />
        </div>
        <div className="max-w-[425px]">
          <div className="flex mt-10">
            <p className="font-[Northwell] text-4xl">3</p>
            <p className="text-xl pl-2">SAVING YOUR TIME </p>
          </div>
          <p className="text-sm pt-4 max-w-[360px]">
            Each item in our collection seamlessly matches the next. Invest in a
            few pieces or the entire line for a season's worth of clothing
            options, designed to last and be loved by others once your little
            one has grown.
          </p>

          <div className="flex mt-8">
            <p className="font-[Northwell] text-4xl">4</p>
            <p className="text-xl pl-2">ETHICAL MANUFACTURING</p>
          </div>
          <p className="text-sm pt-4 max-w-[360px]">
            Our commitment to ethical production isn’t just rhetoric. We place
            the welfare of workers and the environment at the forefront of our
            decision making. Always.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCare;
