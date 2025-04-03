import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#50735F] min-h-[375px] relative overflow-hidden">
      <img
        className="absolute left-[-5%] top-[7%] opacity-60"
        src="../src/assets/images/Group 2078.svg"
        alt=""
      />
      <img
        className="absolute left-[40%] bottom-[-50%] opacity-60"
        src="../src/assets/images/Group 2075.svg"
        alt=""
      />

      <img
        className="absolute right-[-5%] top-[40%] opacity-60"
        src="../src/assets/images/Group 2077.svg"
        alt=""
      />
      <div className="flex justify-between sm:px-[2vw] md:px-[4vw] lg:px-[6vw] text-white pt-11">
        <div className="">
          <p className="max-w-[260px] uppercase text-sm font-normal">
            subscribe to our mailing list and get 15% off your first order
          </p>
          <form className="mt-5" action="">
            <input
              className="bg-[#50735F] border-opacity-50 border-y-[1px] border-l-[1px] border-white border-solid rounded-l p-[20px] pr-[38px]"
              type="email"
              placeholder="Enter your email"
            />
            <button className="py-[21px] px-[47px] bg-[#C58A46] rounded-r-lg">
              I`M IN
            </button>
          </form>
          <img
            className="max-h-[69px] mt-20"
            src="../src/assets/images/treehouse-logo.svg"
            alt=""
          />
          <p>Tree House 2023 © All Rights reserved</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
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
    </div>
  );
};

export default Footer;
