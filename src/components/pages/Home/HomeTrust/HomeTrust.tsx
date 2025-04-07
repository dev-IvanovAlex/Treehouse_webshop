import { useState } from "react";

import paraplane from "../../../../assets/images/trust/paraplan.svg";
import dress from "../../../../assets/images/trust/dress.png";
import cloud from "../../../../assets/images/trust/cloud.svg";

import "./HomeTrust.css";
import ButtonWithArrow from "../../../ButtonWithArrow/ButtonWithArrow";
import { Link } from "react-router-dom";

const HomeTrust = () => {
  const [showEmbroidery, setShowEmbroudery] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showPocket, setShowPocket] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showFabrics, setShowFabrics] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);

  return (
    <div className="text-center px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4] xl:px-[5%] m-auto">
      <p className="text-[#50735F]">YOU CAN TRUST</p>
      <h3 className="mt-4 text-[#50735F] font-[Linotype Didot std] text-3xlsm:text-5xl">
        Transparency in every detail
      </h3>
      <div
        className="relative  mt-10 flex justify-center"
        style={{
          backgroundImage: `url(${paraplane})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <img
          className="absolute top-[45%] left-[15%]"
          src={cloud}
          alt="cloud"
        />
        <div className="px-10 md:px-20 lg:px-40">
          <div className="relative ">
            <img className=" " height={597} width={584} src={dress} alt="" />
            <div
              onMouseOver={() => {
                setShowColor(true);
              }}
              onMouseOut={() => {
                setShowColor(false);
              }}
              className="cursor-pointer absolute top-[30%] left-[37%] flex items-center justify-center"
            >
              <span className="absolute dots  w-11 h-11 bg-[#C58A46]  rounded-full opacity-20 "></span>
              <span className="absolute bg-[#C58A46] w-3 h-3 inline-block rounded-full "></span>
            </div>
            {showColor ? (
              <div className="showElement absolute top-[100%] left-[50%] translate-x-[-50%] md:translate-x-0 md:top-[17%] md:left-[-17%] p-2 lg:p-10 bg-stone-100 rounded-lg shadow-[0px_0px_24px_0px_rgba(80,115,95,0.20)] inline-flex justify-start items-start gap-2.5 overflow-hidden z-10">
                <div className="w-52 h-14 justify-start text-gray-600 text-sm font-normal font-['GT_Cinetype_Trial'] leading-tight">
                  All colors are carefully selected in accordance with the
                  Pantone Color Institute
                </div>
              </div>
            ) : null}
            <div
              onMouseOver={() => {
                setShowPocket(true);
              }}
              onMouseOut={() => {
                setShowPocket(false);
              }}
              className="cursor-pointer absolute top-[63%] left-[54%] flex items-center justify-center"
            >
              <span className="absolute dots  w-11 h-11 bg-[#C58A46]  rounded-full opacity-20 "></span>
              <span className="absolute bg-[#C58A46] w-3 h-3 inline-block rounded-full "></span>
            </div>

            {showPocket ? (
              <div
                className={`showElement absolute  top-[100%] left-[50%] translate-x-[-50%] md:translate-x-0  md:top-[53%] md:left-[59%] p-2 lg:p-10 bg-stone-100 rounded-lg shadow-[0px_0px_24px_0px_rgba(80,115,95,0.20)] inline-flex justify-start items-start gap-2.5 overflow-hidden z-10 `}
              >
                <div className="w-60 h-9 justify-start text-gray-600 text-sm font-normal font-['GT_Cinetype_Trial'] leading-tight">
                  Parent-led design with child-friendly features; pockets
                  welcome!
                </div>
              </div>
            ) : null}

            <div
              onMouseOver={() => {
                setShowFabrics(true);
              }}
              onMouseOut={() => {
                setShowFabrics(false);
              }}
              className="cursor-pointer absolute bottom-[18%] left-[33%] flex items-center justify-center"
            >
              <span className="absolute dots  w-6 h-6 bg-[#C58A46]  rounded-full opacity-20 "></span>
              <span className="absolute bg-[#C58A46] w-2 h-2 inline-block rounded-full "></span>
            </div>
            {showFabrics ? (
              <div className="showElement absolute  top-[100%] left-[50%] translate-x-[-50%] md:translate-x-0  md:top-[66%] md:left-[38%] p-2 lg:p-10 bg-stone-100 rounded-lg shadow-[0px_0px_24px_0px_rgba(80,115,95,0.20)] inline-flex justify-start items-start gap-2.5 overflow-hidden z-10">
                <div className="w-72 h-28 justify-start text-gray-600 text-sm font-normal font-['GT_Cinetype_Trial'] leading-tight">
                  Our commitment to certified fabrics and careful consideration
                  of every step in our supply chain - from responsible cotton
                  farming practices to compostable packaging - ensures
                  high-quality products that support a esponsible fashion
                  industry.
                </div>
              </div>
            ) : null}

            <div
              onMouseOver={() => {
                setShowCertificates(true);
              }}
              onMouseOut={() => {
                setShowCertificates(false);
              }}
              className="cursor-pointer absolute bottom-[52%] left-[63%] flex items-center justify-center"
            >
              <span className="absolute dots  w-6 h-6 bg-[#C58A46]  rounded-full opacity-20 "></span>
              <span className="absolute bg-[#C58A46] w-2 h-2 inline-block rounded-full "></span>
            </div>
            {showCertificates ? (
              <div className="showElement absolute top-[100%] left-[50%] translate-x-[-50%] md:translate-x-0  md:top-[29%] md:left-[3%] p-2 lg:p-10 bg-stone-100 rounded-lg shadow-[0px_0px_24px_0px_rgba(80,115,95,0.20)] inline-flex justify-start items-start gap-2.5 overflow-hidden z-10">
                <div className="w-64 h-36 justify-start text-gray-600 text-sm font-normal font-['GT_Cinetype_Trial'] leading-tight">
                  We are certified by the toughest label for organic cotton
                  garments: GOTS. The certification ensures that the entire
                  production process, including harvesting, processing, and
                  manufacturing, meets strict environmental and social criteria{" "}
                </div>
              </div>
            ) : null}

            <div
              onMouseOver={() => {
                setShowButton(true);
              }}
              onMouseOut={() => {
                setShowButton(false);
              }}
              className="cursor-pointer absolute bottom-[56%] left-[48%] flex items-center justify-center"
            >
              <span className="absolute dots  w-6 h-6 bg-[#C58A46]  rounded-full opacity-20 "></span>
              <span className="absolute bg-[#C58A46] w-2 h-2 inline-block rounded-full "></span>
            </div>
            {showButton ? (
              <div className="showElement absolute  top-[100%] left-[50%] translate-x-[-50%] md:translate-x-0 md:top-[32%] md:left-[-12%] p-2 lg:p-10 bg-stone-100 rounded-lg shadow-[0px_0px_24px_0px_rgba(80,115,95,0.20)] inline-flex justify-start items-start gap-2.5 overflow-hidden z-10">
                <div className="w-64 h-16 justify-start text-gray-600 text-sm font-normal font-['GT_Cinetype_Trial'] leading-tight">
                  Wooden button detailing ensures all materials used are
                  maximally aligned to our sustainable principles
                </div>
              </div>
            ) : null}

            <div
              onMouseOver={() => {
                setShowEmbroudery(true);
              }}
              onMouseOut={() => {
                setShowEmbroudery(false);
              }}
              className="cursor-pointer absolute top-[28%] left-[61%] flex items-center justify-center"
            >
              <span className="absolute dots  w-6 h-6 bg-[#C58A46]  rounded-full opacity-20 "></span>
              <span className="absolute bg-[#C58A46] w-2 h-2 inline-block rounded-full "></span>
            </div>
            {showEmbroidery ? (
              <div className="showElement absolute  top-[100%] left-[50%] translate-x-[-50%] md:translate-x-0 md:top-[15%] md:left-[65%] p-2 lg:p-10 bg-stone-100 rounded-lg shadow-[0px_0px_24px_0px_rgba(80,115,95,0.20)] inline-flex justify-start items-start gap-2.5 overflow-hidden z-10">
                <div className="w-44 h-14 justify-start text-gray-600 text-sm font-normal font-['GT_Cinetype_Trial'] leading-tight">
                  Embroidered leaves — an unexpected organic detail on each item
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Link to={""}>
        <div className="inline-flex mt-12 cursor-pointer mb-[50px]">
          <ButtonWithArrow
            buttonStyles="bg-[#C58A46] text-white text-nowrap group-hover:bg-[#ffa136] group-hover:text-[#726454] group-active:bg-[#50735F] group-active:text-white transition-all"
            arrowRoundedStyles="bg-[#C58A46] group-hover:bg-[#ffa136]  group-active:bg-[#50735F] transition-all"
            arrowStyle="[&>path]:fill-white [&>path]:group-hover:fill-[#726454] [&>path]:group-active:fill-white [&>path]:transition-all"
          />
        </div>
      </Link>
    </div>
  );
};

export default HomeTrust;
