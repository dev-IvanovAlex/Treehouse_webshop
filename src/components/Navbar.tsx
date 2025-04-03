import React from "react";
import LOGO from "../assets/images/LOGO.svg";
import search from "../assets/images/search.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute left-0 right-0 px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] ">
      <div className="flex justify-between items-center  h-20 text-white w-full ">
        <NavLink to="/">
          <img className="h-16" src={LOGO} alt="" />
        </NavLink>
        <ul className="flex gap-x-4 ">
          <NavLink to="/shop">
            <p>Shop+</p>
          </NavLink>
          <NavLink to="/team">
            <p>Our team</p>
          </NavLink>
          <NavLink to="/impact">
            <p>Our impact</p>
          </NavLink>
          <NavLink to="/gift">
            <p>Gift card</p>
          </NavLink>
          <NavLink to="/faq">
            <p>FAQ</p>
          </NavLink>
          <NavLink to="/journal">
            <p>Journal</p>
          </NavLink>
          <NavLink to="/contacts">
            <p>Contacts</p>
          </NavLink>
        </ul>
        <div className="flex gap-x-5">
          <div className="flex items-center cursor-pointer">
            <img className="pr-2" src={search} alt="" />
            <span>Search</span>
          </div>
          <Link to={"/cart"}>(CART 02)</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
