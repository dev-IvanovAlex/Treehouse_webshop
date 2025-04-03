import React, { FC } from "react";
import Arrow from "./Arrow";

type ArrowRoundedProps = {
  arrowRounedStyles: string;
  arrowStyle: string;
};
const ArrowRounded: FC<ArrowRoundedProps> = ({
  arrowRounedStyles,
  arrowStyle,
}) => {
  return (
    <div className={`${arrowRounedStyles} + h-[48px] w-[48px] rounded-full `}>
      <Arrow
        style={`${arrowStyle} + relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
      />
    </div>
  );
};

export default ArrowRounded;
