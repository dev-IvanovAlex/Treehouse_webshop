import LOGO from "../assets/images/LOGO.svg";
import { Link, NavLink } from "react-router-dom";
import Search from "./SVG/Search";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  console.log(showMobileMenu);
  return (
    <div className="absolute left-0 right-0 px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] flex items-center">
      <div
        onClick={() => setShowMobileMenu(true)}
        className=" md:hidden mr-2 w-[30px] h-[30px] cursor-pointer flex items-center group"
      >
        <div className=" group-hover:bg-[#C58A46] after:group-hover:bg-[#C58A46] before:group-hover:bg-[#C58A46] relative h-0.5 bg-white w-full after:h-0.5 after:w-full after:bg-white after:absolute after:top-[6px] before:absolute before:h-0.5 before:bg-white before:w-full before:top-[-6px] group-active:bg-[#ffa136] after:group-active:bg-[#ffa136] before:group-active:bg-[#ffa136]"></div>
      </div>
      <div className="flex justify-between items-center  h-20 text-white w-full gap-x-4">
        <NavLink className="flex-shrink-0" to="/">
          <img className="h-16" src={LOGO} alt="" />
        </NavLink>

        <ul className="hidden gap-x-4 flex-wrap justify-around items-center md:flex ">
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink to="/">
              <p className="text-nowrap">Home</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink to="/shop">
              <p className="text-nowrap">Shop+</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink to="/team">
              <p className="text-nowrap">Our team</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink to="/impact">
              <p className="text-nowrap">Our impact</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink to="/gift">
              <p className="text-nowrap">Gift card</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink to="/faq">
              <p className="text-nowrap">FAQ</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink to="/journal">
              <p className="text-nowrap">Journal</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink to="/contacts">
              <p>Contacts</p>
            </NavLink>
          </div>
        </ul>
        <div className="flex gap-x-2">
          <div className="flex items-center cursor-pointer  group">
            <Search style="group-hover:[&>path]:fill-[#C58A46] group-active:[&>path]:fill-[#ffa136]" />
            <span className="group-hover:text-[#C58A46] group-active:text-[#ffa136]">
              Search
            </span>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <Link to={"/cart"}>
              <p className="text-nowrap">(CART 02)</p>
            </Link>
          </div>
        </div>
      </div>
      {/*------------------- MOBILE MENU---------------------------*/}

      <div
        className={`${
          showMobileMenu ? "w-[75vw]" : "w-0"
        }  fixed top-0 left-0  bottom-0  h-[100vh] bg-[#50735F] opacity-[99%] z-[2] transition-all overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:w-0`}
      >
        <div className="flex justify-between items-center p-5">
          <Link className="flex-shrink-0" to="/">
            <img className="h-16" src={LOGO} alt="" />
          </Link>
          <div onClick={() => setShowMobileMenu(false)}>
            <button className="block px-4 py-1 bg-[#C58A46] rounded-[8px] text-white hover:text-[#726454] hover:bg-[#ffa136]">
              Назад
            </button>
          </div>
        </div>
        <ul className="flex flex-col  text-center gap-y-4 flex-wrap justify-center  text-white text-3xl font-normal font-['Linotype_Didot_Std'] leading-10 px-4">
          <div className="hover:text-[#C58A46] active:text-[#ffa136]  w-full h-auto ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block border-[1px] border-white border-opacity-40 rounded-[5px] text-[#C58A46]"
                  : ""
              }
              to="/"
            >
              <p className="text-nowrap">Home</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136] ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block border-[1px] border-white border-opacity-40 rounded-[5px] text-[#C58A46]"
                  : ""
              }
              to="/shop"
            >
              <p className="text-nowrap">Shop+</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block border-[1px] border-white border-opacity-40 rounded-[5px] text-[#C58A46]"
                  : ""
              }
              to="/team"
            >
              <p className="text-nowrap">Our team</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block border-[1px] border-white border-opacity-40 rounded-[5px] text-[#C58A46]"
                  : ""
              }
              to="/impact"
            >
              <p className="text-nowrap">Our impact</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block border-[1px] border-white border-opacity-40 rounded-[5px] text-[#C58A46]"
                  : ""
              }
              to="/gift"
            >
              <p className="text-nowrap">Gift card</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block border-[1px] border-white border-opacity-40 rounded-[5px] text-[#C58A46]"
                  : ""
              }
              to="/faq"
            >
              <p className="text-nowrap">FAQ</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block border-[1px] border-white border-opacity-40 rounded-[5px] text-[#C58A46]"
                  : ""
              }
              to="/journal"
            >
              <p className="text-nowrap">Journal</p>
            </NavLink>
          </div>
          <div className="hover:text-[#C58A46] active:text-[#ffa136]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block border-[1px] border-white border-opacity-40 rounded-[5px] text-[#C58A46]"
                  : ""
              }
              to="/contacts"
            >
              <p>Contacts</p>
            </NavLink>
          </div>
        </ul>
      </div>
      {/* __________________OVERLAY_________________ */}
      {showMobileMenu ? (
        <div
          onClick={() => setShowMobileMenu(false)}
          className="bg-black opacity-60 fixed top-0 bottom-0 left-0 right-0 z-[1]"
        ></div>
      ) : null}
    </div>
  );
};

export default Navbar;
