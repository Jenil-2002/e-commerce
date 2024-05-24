import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GlobalContext = createContext({});

export const Globalstate = ({ children }) => {
  const [searchParam, setsearchParam] = useState("");
  const [loading, setloading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [productDetailsData, setProductDetailsData] = useState(null);
  const [favoritesList, setfavoritesList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const handleQuantityChange = (value , item, isRemove=false) => {
    if(isRemove){
      setQuantity((prevState)=>{
        const updatedState = {...prevState};
        delete updatedState[item.id];
        return updatedState;
      })
    }else{
      if(value > 10 || value <= 0){
        value = 1;
      }
      setQuantity((prevState)=>{
        return{
          ...prevState,
          [item?.id]:{
            'qty':value,
            'price':item?.price
          }
        }
      })
    }
  };

  function splitArray(arr, k, fillValue = 0) {
    if (k <= 0) {
      throw new Error("Subarray size K must be greater than 0");
    }
  
    return Array.from({ length: Math.ceil(arr.length / k) }, (_, i) => {
      const subarray = arr.slice(i * k, i * k + k);
      return subarray.length < k ? subarray.concat(new Array(k - subarray.length).fill(fillValue)) : subarray;
    });
  }
  

  async function getProducts() {
    setloading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response?.status === 200) {
        const subarrays = splitArray(response?.data, 4);
        setProductList(response?.data);
        setloading(false);
        setsearchParam("");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts();
    /* global bootstrap: false */
    (() => {
      'use strict'
      const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl)
      })
    })()
  }, []);

  async function handleCategory(e, category) {
    console.log(category)
    e.preventDefault();
    setloading(true);
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      if (res?.status === 200) {
        setsearchParam("");
        setProductList(res?.data);
        setloading(false);
        // navigate("/");
      }
    } catch (e) {
      console.log(e);
      setloading(false);
      setsearchParam("");
    }
  }
  function handleAddToFavorite(getCurrentItem) {
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList = cpyFavoritesList.filter(
        (item) => item.id !== getCurrentItem?.id
      );
    }

    setfavoritesList(cpyFavoritesList);
  }

  function handleAddToCart(getCurrentItem) {
    let cpyCartList = [...cartList];
    const index = cpyCartList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyCartList.push(getCurrentItem);
      handleQuantityChange(1,getCurrentItem)
    } else {
      cpyCartList.splice(index,1);
      handleQuantityChange(1,getCurrentItem,  true)
    }
    
    setCartList(cpyCartList);
  }


  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        productList,
        setsearchParam,
        handleCategory,
        productDetailsData,
        setProductDetailsData,
        handleAddToFavorite,
        favoritesList,
        getProducts,
        cartList,
        setCartList,
        handleAddToCart,
        quantity,
        setQuantity,
        handleQuantityChange
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
