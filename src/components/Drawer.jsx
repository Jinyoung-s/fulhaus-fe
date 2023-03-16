import React, { useState, useEffect } from "react";
import Cart from "./Cart";

function Drawer({ cartList, deleteCartItem, isOpen, setIsOpen }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getData = async () => {
      let totalValue = cartList.reduce((a, v) => (a = a + v.retailPrice), 0);
      setTotal(totalValue);
      console.log(totalValue);
    };

    getData();
  });

  return (
    <>
      {isOpen ? (
        <button
          className="flex text-4xl items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          X
        </button>
      ) : (
        <svg
          onClick={() => setIsOpen(!isOpen)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="black"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[22rem] xl:w-[23vw] lg:w-[28vw] md:w-[35vw] sm:w-[32vw] bg-gray-50 p-7 pl-5 text-black fixed h-full z-40 ease-in-out duration-300 ${
          isOpen ? "translate-x-0 " : "translate-x-full"
        } ${cartList.length > 2 ? "overflow-auto" : ""}`}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="">
            <h3 className="text-4xl text-black">My Order</h3>
            <div className="mt-10">
              {cartList.map((cartItem, idx) => (
                <Cart
                  key={idx}
                  prod={cartItem}
                  deleteCartItem={deleteCartItem}
                ></Cart>
              ))}
            </div>
          </div>
          <div id="bottomArea" className="h-1/5 flex flex-col justify-center ">
            <div className=" flex justify-center">
              <h3 className="text-3xl text-black w-32 h-12">Total</h3>
              <div className="flex justify-end w-32">
                <h3 className="text-3xl text-black h-12">${total}</h3>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="h-12 bg-black font-bold w-64  text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
