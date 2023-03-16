import "./assets/css/main.css";
import Card from "./components/Card.jsx";
import Drawer from "./components/Drawer";
import React, { useState, useEffect } from "react";
import { getProduct } from "./apis/AxiosApi";

function App() {
  const [productList, setProductList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cartList, setCartList] = useState([]);

  const addCartList = (prod) => {
    let updatedCart = [];
    if (cartList.length > 0) {
      const idx = cartList.findIndex((v) => v.itemId === prod.itemId);

      if (idx > -1) {
        updatedCart = [...cartList];
        updatedCart[idx].cnt += 1;
      } else {
        updatedCart = [...cartList, { ...prod, cnt: 1 }];
      }
    } else {
      updatedCart = [...cartList, { ...prod, cnt: 1 }];
    }
    setCartList(updatedCart);
    setIsOpen(true);
  };

  const deleteCartItem = (itemId) => {
    const updatedCart = cartList.filter((item) => item.itemId !== itemId);
    setCartList(updatedCart);
  };

  useEffect(() => {
    console.log("dddd");
    const getData = async () => {
      let result = await getProduct();
      setProductList(result.data.products);

      console.log(result);
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col w-3/4 mx-auto md:h-screen ">
      <Drawer
        cartList={cartList}
        deleteCartItem={deleteCartItem}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="flex flex-col md:flex-row p-1">
        <div className="w-full md:w-1/3 bg-gray-300 min-w-[17rem] sm:min-w-[15rem]">
          <div className="w-full h-full">
            <img alt="sofa" className="h-full w-full " src="/sofa.png" />
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-wrap">
          {productList.map((product, idx) => (
            <div
              key={idx}
              className="w-full md:w-1/3 h-1/2 bg-white min-w-[17rem] sm:min-w-[15rem]"
            >
              <Card
                itemId={product._id}
                imageSrc={product.imageURLs[0]}
                name={product.fulhausProductName}
                retailPrice={product.retailPrice}
                cartList={cartList}
                addCartList={addCartList}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
