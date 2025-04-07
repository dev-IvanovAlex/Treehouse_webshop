import { FC } from "react";
import ArrowRounded from "../SVG/Arrow/ArrowRounded";

type ButtonWithArrowProps = {
  arrowRoundedStyles: string;
  buttonStyles: string;
  arrowStyle: string;
};

const ButtonWithArrow: FC<ButtonWithArrowProps> = ({
  arrowRoundedStyles,
  buttonStyles,
  arrowStyle,
}) => {
  return (
    <div className="inline-flex mt-12 cursor-pointer group">
      <button
        className={`${buttonStyles} + px-6 sm:px-12 py-3 rounded-[80px] `}
      >
        SHOP NOW
      </button>
      <ArrowRounded
        arrowRounedStyles={arrowRoundedStyles}
        arrowStyle={arrowStyle}
      />
    </div>
  );
};

export default ButtonWithArrow;
