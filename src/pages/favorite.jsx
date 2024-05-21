import React, { useContext, useEffect } from "react";
import GlobalContext from "../context/context";
import ProductCard from "../components/productCard";

export default function Favorite() {
  const { favoritesList } = useContext(GlobalContext);

//   const TotalAmount = () => {
//     let amount = 0;
//     favoritesList.map((favorite) => {
//       amount += favorite.price;
//     })
//     return amount;
//   }

//  useEffect(() => {
//   TotalAmount();
//   console.log(favoritesList)
//  },[])

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is Added in favorites.
          </p>
        </div>
      )}

      {/* <h3 className="font-bold text-2xl truncate text-black">Total Amount: <span className="text-blue-500">${TotalAmount()}</span></h3>  */}
    </div>
  );
}
