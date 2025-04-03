import React, { FC } from "react";

type ArrowProps = {
  style: string;
};

const Arrow: FC<ArrowProps> = ({ style }) => {
  return (
    <svg
      className={style}
      width="16.001953"
      height="16.001953"
      viewBox="0 0 16.002 16.002"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="Vector 1 (Stroke)"
        d="M10.5 9.97C9.54 11.25 9 12.73 8.79 13.72L10.01 14C10.18 13.16 10.65 11.88 11.48 10.78C12.31 9.69 13.45 8.84 15 8.73L15 7.43C13.91 7.43 11.08 6.46 10 2L8.79 2.31C9.4 4.85 10.54 6.46 11.73 7.43L0 7.43L0 8.73L11.69 8.73C11.24 9.1 10.84 9.53 10.5 9.97Z"
        fill="#C58A46"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Arrow;
