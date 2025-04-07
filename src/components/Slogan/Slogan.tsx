import { FC } from "react";
import SloganHomeGirl from "../SVG/SloganHomeGirl";

type SloganProps = { headerText: string };

const Slogan: FC<SloganProps> = ({ headerText }) => {
  return (
    <div className="relative m-auto  text-center text-[#50735F] px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] sl:px-[5%] mb-[160px]">
      <SloganHomeGirl style="max-h-36 relative top-[14px] sm:top-[20px] m-[0_auto]" />

      <h2 className="font-[Linotype Didot std] text-6xl sm:text-8xl text-center">
        {headerText}
      </h2>
    </div>
  );
};

export default Slogan;
