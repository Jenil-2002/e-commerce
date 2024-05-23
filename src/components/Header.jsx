import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import GlobalContext from "../context/context";

export default function Header() {
  const { searchParam, setsearchParam, handleCategory, getProducts } =
    useContext(GlobalContext);

  const location = useLocation();
  return (
    <header className="">
      <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        {/* <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10 py-8 container mx-auto flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 px-4 lg:px-0"></nav> */}
        <h2 className="text-2xl font-semibold">
          <NavLink
            to={"/favorite"}
            className="text-red hover:text-gray-700 duration-300"
          >
            E-Commerce
          </NavLink>
        </h2>
        {location.pathname === "/" && (
          <form onSubmit={(event) => handleCategory(event, searchParam)}>
            <input
              type="text"
              name="search"
              value={searchParam}
              onChange={(e) => setsearchParam(e.target.value)}
              placeholder="Enter Items..."
              className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
            />
          </form>
        )}
        <ul className="flex gap-5">
          <li>
            <NavLink
              to={"/"}
              onClick={getProducts} // Pass function reference
              className="text-black hover:text-gray-700 duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorite"}
              className="text-black hover:text-gray-700 duration-300"
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/cart"}
              className="text-black hover:text-gray-700 duration-300"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
