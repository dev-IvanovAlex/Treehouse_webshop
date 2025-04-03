import React, { FC } from "react";
import ButtonWithArrow from "./ButtonWithArrow/ButtonWithArrow";

type h2textProps = {
  text1: string;
  title: String;
  text2: string;
  text3?: string;
};

const h2text: FC<h2textProps> = ({ text1, title, text2, text3 }) => {
  return (
    <div className="max-w-[280px] mt-8 ml-8">
      <p>{text1}</p>
      <h2 className="pt-[13px] text-5xl">{title}</h2>
      <p className="mt-4 text-sm">{text2}</p>
      <div className=" inline-flex mt-12 cursor-pointer text-[#50735F]">
        <ButtonWithArrow
          arrowRoundedStyles={"border-2 border-[#50735F]"}
          buttonStyles={"border-2 border-[#50735F] text-[#50735F]"}
          arrowStyle={"[&>path]:fill-[#50735F]"}
        />
      </div>
    </div>
  );
};

export default h2text;
