import { useAppContext } from "../context/AppContext";
import { FaShoppingCart, FaStar } from "react-icons/fa";
const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  return (
    product && (
      <div
        onClick={() => {
          navigate(
            `/products/${product.category.toLowerCase()}/${product._id}`
          );
          scrollTo(0, 0);
        }}
        className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white w-full"
      >
        <div className="group cursor-pointer flex items-center justify-center px-2">
          <img
            className="group-hover:scale-105 transition max-w-26 md:max-w-36"
            src={product.image[0]}
            alt={product.name}
          />
        </div>
        <div className="text-gray-500/60 text-left text-sm">
          <p>{product.category}</p>
          <p className="text-gray-700 font-medium text-lg truncate w-full">
            {product.name}
          </p>
          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <span key={i}>
                  {i < 4 ? (
                    <FaStar className="text-yellow-400 md:text-sm text-xs" />
                  ) : (
                    <FaStar className="text-yellow-200 md:text-sm text-xs" />
                  )}
                </span>
              ))}
            <p className="text-sm text-gray-600 ml-1">(4)</p>
          </div>
          <div className="flex items-end justify-between mt-3">
            <p className="md:text-[18px] text-base font-medium text-orange-500">
              {currency}
              {product.offerPrice}{" "}
              <span className="text-gray-500/60 md:text-[12px] text-xs line-through">
                {currency}
                {product.price}
              </span>
            </p>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="text-orange-500"
            >
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center justify-center gap-1 bg-orange-100 border border-orange-300 md:w-[80px] w-[64px] h-[34px] rounded text-orange-600 font-medium cursor-pointer"
                  onClick={() => addToCart(product._id)}
                >
                  <FaShoppingCart />
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-orange-500/25 rounded select-none">
                  <button
                    onClick={() => {
                      removeFromCart(product._id);
                    }}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    -
                  </button>
                  <span className="w-5 text-center">
                    {cartItems[product._id]}
                  </span>
                  <button
                    onClick={() => {
                      addToCart(product._id);
                    }}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
