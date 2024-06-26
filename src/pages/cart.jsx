import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/context";
import ProductCard from "../components/productCard";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Row, Table } from "react-bootstrap";
import CartProductCard from "../components/cartProductCard";
import { useSelector } from "react-redux";

export default function Cart() {
  const { cartList, quantity } = useContext(GlobalContext);
  const cart = useSelector((state)=>state?.cart);
  const [subTotalPrice, setsubTotalPrice] = useState(0);
  const [tax, setTax] = useState(2);
  const [totalPrice, setTotalPrice] = useState(0);

  // const TotalAmount = () => {
  //   let amount = 0;
  //   Object.values(quantity).map((item) => {
  //     amount += item?.price * item?.qty;
  //   });
  //   return amount.toFixed(2);
  // };
  // console.log(cartList)

  // useEffect(() => {
  //   TotalAmount();
  // }, [quantity]);

  useEffect(() => {
    let amount = 0;
    Object.values(quantity).map((item) => {
      amount += item?.price * item?.qty;
    });
    setsubTotalPrice(amount.toFixed(2));
    setTotalPrice((amount + tax).toFixed(2));
    if (cart.length === 0) {
      setTax(0);
      // let cartShow = document.querySelector(".cartShow");
      // let table = document.querySelector("Table");
      // table.style.display = "none";
      // cartShow.innerHTML += "No Products in cart list";
    }
  }, [quantity]);

  return (
    <div className="productSlider mb-5 mt-5">
      <Container>
        <Row>
          {cart && cart.length > 0 ? (
            <>
              <h5 className="text-left mb-4 ps-2">Cart List</h5>
              <div className="col-lg-9 cartShow">
                <Table bordered hover responsive="sm">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price($)</th>
                      <th className="text-center">
                        Quantity <br />
                        <p style={{ fontSize: "10px" }}>Max-10</p>
                      </th>
                      <th>Sub Total($)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart &&
                      cart.length > 0 &&
                      cart.map((item, index) => (
                        <CartProductCard
                          item={item}
                          isWish={false}
                          isCart={true}
                        />
                      ))}
                  </tbody>
                </Table>
              </div>
              <div className="right-10 col-lg-3 cartSum boxShadaw bg-light p-4 border h-50">
                <h5 className="text-left mb-4 pb-2">Cart Price</h5>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="fw-normal">Tax :</h6>
                  <span>${tax}</span>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <h6 className="fw-normal">SubTotal Price :</h6>
                  <span>${subTotalPrice}</span>
                </div>
                <div className="d-flex justify-content-between fw-bold">
                  <h6>Total Price :</h6>
                  <span>${totalPrice}</span>
                </div>
                <Link
                  to="https://buy.stripe.com/test_fZeg2i6158gYas09AA"
                  variant="dark"
                  size="md"
                  className="btn btn-dark mt-4 w-100"
                >
                  Pay Now
                </Link>
              </div>
            </>
          ) : (
            <div>
              <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                Nothing is Added in cart.
              </p>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}
/*  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {cartList && cart.length > 0 ? (
        cart.map((item, index) => (
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
  ); */

// }
