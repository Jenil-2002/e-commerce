import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import GlobalContext from "../context/context";

export default function Navbar() {
  const { searchParam, setsearchParam, handleCategory, getProducts } =
    useContext(GlobalContext);

    const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 w-full py-2 container-fluid mx-auto flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0 navbar">
    {/* <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0"> */}
      <h2 className="text-2xl font-semibold">
        <NavLink
          to={"/"}
          onClick={getProducts} 
          className="text-red hover:text-gray-700 duration-300 px-4"
        >
          E-Commerce
        </NavLink>
      </h2>
      {
        location.pathname === "/" &&
      <form onSubmit={(event) => handleCategory(event, searchParam)}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setsearchParam(e.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-2 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      }
      <ul className="flex gap-5 px-4">
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
  );
}
