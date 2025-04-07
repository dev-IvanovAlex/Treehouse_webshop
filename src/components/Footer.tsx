import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./SVG/Arrow/Arrow";
import Vector from "./SVG/Vector";

const Footer = () => {
  return (
    <div className=" bg-[#50735F] min-h-[375px] relative overflow-hidden px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] pb-[32px]">
      <img
        className="absolute left-[-5%] top-[7%] opacity-60"
        src="../src/assets/images/Group 2078.svg"
        alt=""
      />
      <img
        className="absolute left-[40%] bottom-[-38%] opacity-60"
        src="../src/assets/images/Group 2075.svg"
        alt=""
      />

      <img
        className="absolute right-[-5%] top-[40%] opacity-60"
        src="../src/assets/images/Group 2077.svg"
        alt=""
      />
      <div className="flex flex-col md:flex-row justify-between  text-white pt-11">
        <div className="text-center md:text-base">
          <p className="max-w-[260px] uppercase text-sm font-normal m-auto md:m-0">
            subscribe to our mailing list and get 15% off your first order
          </p>
          <form className="mt-5 text-nowrap" action="">
            <input
              className="bg-[#50735F] border-opacity-50 border-y-[1px] border-l-[1px] border-white border-solid rounded-l p-[13px] pr-[25px] outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button className="py-[15px] px-[30px] bg-[#C58A46] rounded-r-lg hover:bg-[#ffa136] hover:text-[#726454] active:bg-[#faaf5a] active:text-white transition-all">
              I`M IN
            </button>
          </form>
        </div>
        <div className="grid gap-5  grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-10 md:mt-0 text-center md:text-base">
          <div>
            <p>SITEMAP</p>
            <ul className="flex flex-col mt-6 gap-y-1">
              <Link>Shop</Link>
              <Link>Meet us</Link>
              <Link>Our impact</Link>
              <Link>Gift cards</Link>
              <Link>FAQ</Link>
              <Link>Blog</Link>
              <Link>Contacts</Link>
            </ul>
          </div>
          <div>
            <p>SITEMAP</p>
            <ul className="flex flex-col mt-6 gap-y-1">
              <Link>Instagram</Link>
              <Link>Facebook</Link>
              <Link>Pinterest</Link>
            </ul>
          </div>
          <div>
            <p>CUSTOMER CARE</p>
            <ul className="flex flex-col mt-6 gap-y-1">
              <Link>Terms & Conditions</Link>
              <Link>Privacy Policy</Link>
              <Link>Delivery & return</Link>
              <Link>Track your order</Link>
              <Link>FAQ</Link>
            </ul>
          </div>
          <div>
            <p>PAYMENT METHODS</p>
            <ul className="flex flex-col mt-6 gap-y-1">
              <Link>PAYPAL</Link>
              <Link>VISA</Link>
              <Link>Google Pay</Link>
              <Link>Apple pay</Link>
              <Link>shop pay</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end mt-10 md:mt-0">
        <div className="">
          <img
            className="max-h-[69px] "
            src="../src/assets/images/treehouse-logo.svg"
            alt=""
          />
          <p className="text-white text-center">
            Tree House 2023 © All Rights reserved
          </p>
        </div>
        <div className="relative flex cursor-pointer px-4">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Vector style={""} />
          </div>
          <Arrow style={"rotate-[-90deg] [&>path]:fill-white"} />
          <p className=" text-white">UP</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
