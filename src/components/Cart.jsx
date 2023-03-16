import { RiDeleteBack2Fill } from "react-icons/ri";

const Cart = ({ prod, deleteCartItem }) => {
  console.log(prod);

  return (
    <div className="relative grid grid-cols-2 gap-4 mt-5">
      <div>
        <img
          src={prod.imgSrc}
          alt={prod.name}
          className="w-full object-cover h-44"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-lg font-semibold">{prod.name}</div>
        <div className="text-lg font-semibold  flex justify-between ">
          <div>${prod.retailPrice}</div>
          <div>X{prod.cnt}</div>
        </div>
        <button
          className="absolute top-0 right-0 "
          onClick={() => deleteCartItem(prod.itemId)}
        >
          <RiDeleteBack2Fill className="w-6 h-6"></RiDeleteBack2Fill>
        </button>
      </div>
    </div>
  );
};

export default Cart;
