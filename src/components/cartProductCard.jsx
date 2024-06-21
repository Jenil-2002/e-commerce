import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import GlobalContext from "../context/context";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { TfiShoppingCart, TfiShoppingCartFull } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartProductCard({ item }) {
  const location = useLocation();
  const {
    favoritesList,
    handleAddToFavorite,
    quantity,
    handleQuantityChange,
    cartList,
    handleCart,
  } = useContext(GlobalContext);
  return (
    /*     <Card className="flex col-2 p-2 product-card overflow-hidden bg-white/75 shadow-xl border-2 rounded-2xl border-white">
      <div className="p-0 h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <div className="col-6">
          <Card.Img variant="top" src={item?.image} className="block w-full" />
          <button
            className="absolute top-2 right-2 text-sm rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-white text-white"
            onClick={() => handleAddToFavorite(item)}
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex((product) => product?.id === item?.id) !==
              -1 ? (
              <BsHeartFill size={20} className="text-red-500" />
            ) : (
              <BsHeart size={20} className="text-red-500" />
            )}
          </button>
        </div>
        <div className="col-6 ml-2 mt-2">
          <Card.Title className="product-title text-truncate-card">
            {item?.title}
          </Card.Title>
        </div>
      </div>
      <Card.Body className="m-0 p-0">
        <div className="p-0 m-0 text-center">
          <Card.Text className="product-price">${item?.price}</Card.Text>
        </div>
        {location.pathname.includes("/cart") && (
          <>
            <div className="input-group mb-3">
              <input
                type="number"
                value={quantity[item?.id]?.qty || 1}
                onChange={(e) => handleQuantityChange(e.target.value, item)}
                min="1" // Set minimum quantity allowed
                className="quantity-input w-50 form-control"
                id="qty"
              />
              <span className="input-group-text" id="qty">
                QTY
              </span>
            </div>
          </>
        )}
        <div className="flex justify-between">
          <Link
            type="button"
            to={`/products/${item?.id}`}
            className="p-2 m-2 bg-blue-700 rounded-lg "
          >
            <FaEye size={23} color="white" />
          </Link>
          <button
            onClick={() => handleCart(item)}
            className="p-2 m-2 bg-yellow-500 rounded-lg "
          >
            {cartList &&
            cartList.length > 0 &&
            cartList.findIndex((product) => product.id === item?.id) !== -1 ? (
              <TfiShoppingCartFull size={23} color="white" />
            ) : (
              <TfiShoppingCart size={23} color="white" />
            )}
          </button>
        </div>
      </Card.Body>
    </Card> */
    <tr key={item?.id}>
      <td>
        <Link to={`/products/${item?.id}`}>
          <img
            src={item?.image}
            alt="productImg"
          />
        </Link>
      </td>
      <td>{item?.title}</td>
      <td className="price-new">{item?.price}</td>
      <td>
        <div className="input-group mb-3">
          <input
            type="number"
            value={quantity[item?.id]?.qty || 1}
            onChange={(e) => handleQuantityChange(e.target.value, item)}
            min={1} // Set minimum quantity allowed
            max={10}
            className="quantity-input w-50 form-control"
            id="qty"
          />
        </div>
        {/* <input
            type="number"
            id="qty"
            name="qty"
            min="1"
            max={props.product.maxQuantity}
            step="1"
            // defaultValue="1"
            value={inputQty}
            onChange={onChangeQuantity}
          /> */}
      </td>
      <td className="subTotalShow">{(item?.price*quantity[item?.id]?.qty).toFixed(2)}</td>
      <td>
        {/* <Button
            variant="dark"
            size="sm"
            className="ms-2"
            onClick={(e) => deleteFromCart(e, props.product.id)}
          >
            <RiDeleteBin6Line />
          </Button> */}
        <Button
          variant="dark"
          size="sm"
          className="ms-2"
          onClick={(e) => handleCart(item)}
        >
          {cartList &&
            cartList.length > 0 &&
            cartList.findIndex((product) => product.id === item?.id) !== -1 && (
              <RiDeleteBin6Line size={20} />
            )}
        </Button>
      </td>
    </tr>
  );
}
