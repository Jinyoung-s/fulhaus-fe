import { FaStar } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Product from "./Product";

const Card = ({
  itemId,
  imageSrc,
  name,
  retailPrice,
  cartList,
  addCartList,
}) => {
  const prod = new Product(itemId, imageSrc, name, retailPrice);

  return (
    <div className="border h-full  flex flex-col p-1">
      <div className="h-2/3 w-full bg-green-100 border border-gray-200 overflow-hidden">
        <div className="h-full w-full relative sm:relative">
          <img
            className="block w-full h-full object-cover sm:absolute"
            src={imageSrc}
            alt={name}
          />
        </div>
      </div>
      <div className="h-1/3 flex flex-col">
        <div className="h-1/2 flex flex-col">
          <div className="h-3/5 font-bold truncate p-1">{prod.name}</div>
          <div className="h-2/5">
            <div className="flex flex-row pl-1">
              <FaStar className="text-amber-500"></FaStar>
              <FaStar className="text-amber-500"></FaStar>
              <FaStar className="text-amber-500"></FaStar>
              <FaStar className="text-amber-500"></FaStar>
              <FaStar className="text-amber-500"></FaStar>
            </div>
          </div>
        </div>
        <div className="h-1/2 flex flex-col">
          <div className="flex justify-between p-3 items-end">
            <div>
              <span className="font-bold">${retailPrice}</span>
            </div>
            <div>
              <button
                onClick={() => addCartList(prod)}
                className="lg:h-7 lg:w-7 bg-gray-200 rounded-full h-full  flex items-center"
              >
                <MdOutlineAddShoppingCart className=" m-auto"></MdOutlineAddShoppingCart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
