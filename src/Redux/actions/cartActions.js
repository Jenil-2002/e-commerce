import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constants/actions-types"

export const addToCart = (data) => {
    console.log("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.warn("action emptyCart",)
    return {
        type: EMPTY_CART,
    }
}