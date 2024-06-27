import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import cartLogo from "../assets/SVG/cart.svg";
import { useEffect, useState } from "react";
import { IndianRupee, Trash } from "lucide-react";
import { DECREASE_QUANTITY, REMOVE_FROM_CART, addToCart } from "../store/slice";
import { toast } from "react-toastify";

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0));
  }, [cart]);

  const handleRemove = (id) => {
    dispatch(REMOVE_FROM_CART(id));
    toast.success("Item removed from cart!", {
      position: "bottom-right",
      theme: "colored",
    });
  };

  const increaseItem = (product) => {
    dispatch(addToCart(product));
  }

  const decreaseItem = ( product) => {
    dispatch(DECREASE_QUANTITY(product));
  }

  const handlePayment = () => {
    const user = JSON.parse(localStorage.getItem("user"));
   if (!user) {
     toast.error("Please login for checkout", {
       position: "bottom-right",
       theme: "colored",
     });
     return;
   }
   navigate("/checkout");
 };

  console.log(cart);
  return cart.length === 0 ? (
    <div className="py-60 flex flex-col justify-center items-center dark:bg-[rgb(32,33,36)] dark:text-white">
      <img src={cartLogo} alt="cartLogo" className="h-60 w-60" />
      <h1>Cart is empty</h1>
    </div>
  ) : (
    <div className="pt-20 dark:bg-[rgb(32,33,36)] dark:text-white">
      <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2 ">
        <h2 className="text-3xl font-bold">Your cart</h2>

        <ul className="flex flex-col divide-y divide-gray-200">
          {cart.map((product, index) => (
            <li
              key={index}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="h-20 w-20 object-center rounded-xl sm:h-32 sm:w-32"
                  src={product.image}
                  alt={product.name}
                />
                <div className="flex w-full flex-col justify-between pb-4">
                  <div className="flex w-full justify-between space-x-2 pb-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {product.name}
                      </h3>
                      <p className="text-sm">{product.color}</p>
                    </div>
                    <div className="text-right flex justify-center items-center">
                      <p className="text-xl font-semibold flex justify-center items-center">
                        {" "}
                        <IndianRupee size={19} />
                        {product.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <button
                      type="button"
                      className="flex items-center space-x-2 px-2 py-1 pl-0"
                      onClick={() => handleRemove(product.id)}
                    >
                      <Trash size={16} />
                      <span>Remove</span>
                    </button>
                    <div className="group flex h-6 flex-shrink-0 items-center justify-between rounded-md md:h-8  text-black border">
                      <button
                        className="text-heading hover:bg-heading flex h-full w-12 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-8"
                        onClick={() => decreaseItem(product)}
                      >
                        -
                      </button>
                      <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-12">
                        {product.quantity}
                      </span>
                      <button
                        className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-8"
                        onClick={() => increaseItem(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className=" flex justify-end">
          <p className="text-xl mr-3">Total amount:</p>{" "}
          <span className="font-semibold text-xl flex justify-center items-center ">
            {" "}
            <IndianRupee size={19} />
            {total}
          </span>
        </div>
        <div className="flex justify-end space-x-4">
          <Link to="/">
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-white dark:text-white"
            >
              Back
            </button>
          </Link>
          <button
            type="button"
            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-white dark:text-white"
            onClick={handlePayment}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
