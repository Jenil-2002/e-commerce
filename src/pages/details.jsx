import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../context/context";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineLabel } from "react-icons/md";

export default function Details() {
  const { id } = useParams();
  const {
    productDetailsData,
    setProductDetailsData,
  } = useContext(GlobalContext);

  async function getProductDetails() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProductDetailsData(response?.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProductDetails();
  }, []);

  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return <div className="flex">{stars}</div>;
  };

  const [showZoomBox, setShowZoomBox] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [backgroundSize, setBackgroundSize] = useState("");
  const [backgroundPosition, setBackgroundPosition] = useState("");

  const handleMouseMove = (e) => {
    const img = e.target;
    const result = document.querySelector(".img-zoom-result");
    const lens = document.querySelector(".img-zoom-lens");

    if (!img || !result || !lens) return;

    const zoomedWidth = img.width;
    const zoomedHeight = img.height;

    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;

    const zoomBoxWidth = lens.offsetWidth;
    const zoomBoxHeight = lens.offsetHeight;
    const zoomBoxCenterX = offsetX - zoomBoxWidth / 2;
    const zoomBoxCenterY = offsetY - zoomBoxHeight / 2;

    let x = zoomBoxCenterX;
    let y = zoomBoxCenterY;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + zoomBoxWidth > zoomedWidth) x = zoomedWidth - zoomBoxWidth;
    if (y + zoomBoxHeight > zoomedHeight) y = zoomedHeight - zoomBoxHeight;

    const cx = result.offsetWidth / lens.offsetWidth;
    const cy = result.offsetHeight / lens.offsetHeight;

    setBackgroundSize(`${img.width * cx}px ${img.height * cy}px`);
    setBackgroundPosition(`-${x * cx}px -${y * cy}px`);
    setMousePosition({ x: offsetX, y: offsetY });
    setShowZoomBox(true);
  };

  const handleMouseEnter = () => {
    setShowZoomBox(true);
  };

  const handleMouseLeave = () => {
    setShowZoomBox(false);
  };

  const toCamelCase = (str) => {
    if (!str) return ""; // Handle null or undefined input
    const words = str.trim().toLowerCase().split(" "); // Trim leading/trailing spaces and split by space
    const camelCaseString = words
      .map((word, index) => {
        return index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1)
          : word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first character of each word
      })
      .join(" "); // Join the words back together
    return camelCaseString;
  };

  return (
    <div className="container mt-5 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto relative">
        <div className="rounded-xl group productImage">
          <img
            src={productDetailsData?.image}
            className="w-80 h-80  block rounded-xl"
            alt="Zoomable"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {showZoomBox && (
            <div
              className="img-zoom-lens"
              style={{
                position: "absolute",
                top: mousePosition.y - 90, // Adjust to center the lens
                left: mousePosition.x + 40, // Adjust to center the lens
                width: "200px", // Adjust size as needed
                height: "200px", // Adjust size as needed
                border: "1px solid #000",
                backgroundColor: "rgba(255, 255, 255, 0.5)", // Background color with transparency
                opacity: 0.5, // Opacity for transparency
                pointerEvents: "none",
              }}
            ></div>
          )}
        </div>
        {/* {showZoomBox && (
          <div className="zoom-box">
            <div
              className="zoom-box-image"
              style={{
                backgroundImage: `url(${productDetailsData?.image})`,
                backgroundPosition: `-${mousePosition.x}px -${mousePosition.y}px`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // width: '200px', // Adjust according to zoom box size
                // height: '200px', // Adjust according to zoom box size
              }}
            ></div>
          </div>
        )} */}
        {showZoomBox && (
          <div
            className="img-zoom-result zoom-box-image"
            style={{
              position: "absolute",
              top: "2px",
              left: "105%",
              // width: '100%', // Adjust size as needed
              // height: '200px', // Adjust size as needed
              border: "1px solid #000",
              backgroundImage: `url('${productDetailsData?.image}')`,
              backgroundSize: backgroundSize,
              backgroundPosition: backgroundPosition,
              backgroundRepeat: "no-repeat",
              zIndex: 99999,
            }}
          ></div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <ul className="tags">
          <li>{toCamelCase(productDetailsData?.category)}</li>
        </ul>
        {/* <span className="text-sm text-cyan-700 font-medium">
          {productDetailsData?.category}
        </span> */}
        <h3 className="font-bold text-4xl text-black">
          {productDetailsData?.title}
        </h3>
        <span className="text-xl text-blue-500 font-medium">
          ${productDetailsData?.price}
        </span>
        <div>
          <StarRating rating={productDetailsData?.rating?.rate} />
        </div>
        {/* <div>
          <button
            onClick={() => handleCart(productDetailsData)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {cartList &&
            cartList.length > 0 &&
            cartList.findIndex(
              (item) => item.id === productDetailsData?.id
            ) !== -1
              ? "Remove from cart"
              : "Add to cart"}
          </button>
        </div> */}
        <div>
          <span className="text-2xl font-bold text-black">Description:</span>
          <br />
          {/* <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}> */}
          <span className="text-lg font-semibold text-grey align-super">
            {productDetailsData?.description}
          </span>
          {/* <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
