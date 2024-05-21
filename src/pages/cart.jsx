import React, { useContext, useEffect } from "react";
import GlobalContext from "../context/context";
import ProductCard from "../components/productCard";
import { useLocation } from "react-router-dom";

export default function Cart() {
  const { cartList, quantity } = useContext(GlobalContext);

  console.log(quantity)
  const TotalAmount = () => {
    let amount = 0;
    Object.values(quantity).map((item) => {
      amount += item?.price * item?.qty;
    })
    return amount.toFixed(2);
  }
  // console.log(cartList)

 useEffect(() => {
  TotalAmount();
 },[quantity])

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {cartList && cartList.length > 0 ? (
        cartList.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is Added in cart.
          </p>
        </div>
      )}

      <h3 className="font-bold text-2xl truncate text-black">Total Amount: <span className="text-blue-500">${TotalAmount()}</span></h3> 
    </div>
  );
}
