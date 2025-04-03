import React from "react";
import { Link } from "react-router-dom";

const CardHome = () => {
  return (
    <div>
      <img
        className="max-h-[380px]"
        src="../src/assets/images/Frame 2064.png"
        alt=""
      />
      <p className="text-[#50735F] mt-4">Сozy chic for the playground</p>
      <div className="flex ">
        <img
          className="rotate-180"
          src="../src/assets/images/prev.svg"
          alt=""
        />
        <Link className="text-[#50735F]">VIEW PRODUCTS</Link>
      </div>
    </div>
  );
};

export default CardHome;
