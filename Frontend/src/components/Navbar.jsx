import { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartCount,
  } = useAppContext();
  const logout = async () => {
    setUser(null);
    Navigate("/");
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white sticky top-0 z-50 transition-all">
      <NavLink to="/" onClick={() => setOpen(false)}>
        {/* <img
          className="h-9"
          src=""
          alt="dummyLogoColored"
        /> */}
        <h2 className="text-[28px] font-bold">
          Big<span className="text-orange-600">Mart</span>
        </h2>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink
          className="hover:text-orange-500"
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Home
        </NavLink>
        <NavLink className="hover:text-orange-500" to="/products">
          Products
        </NavLink>
        <NavLink className="hover:text-orange-500" to="/contact">
          Contact
        </NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-2 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <FaSearch className=" cursor-pointer " />
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <FaShoppingCart />
          <button className="absolute -top-2 -right-2 text-[10px] text-white text-center bg-orange-500 w-[14px] h-[14px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-orange-500 hover:bg-orange-600 transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            {/* <img src="" className="w-10" alt="" /> */}
            <h2 className="w-9 h-9 flex items-center justify-center bg-orange-200 border text-sm rounded-full cursor-pointer">
              MC
            </h2>
            <ul className="hidden group-hover:block absolute top-9 right-0 bg-white shadow border border-orange-200 py-2.5 w-30 rounded-md text-sm z-40">
              <li
                onClick={() => navigate("my-orders")}
                className="p-1.5 pl-3 hover:bg-orange-200 cursor-pointer"
              >
                My Order
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-3 hover:bg-orange-200 cursor-pointer flex items-center gap-1"
              >
                logout
                <FaSignOutAlt />
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6 sm:hidden">
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <FaShoppingCart />
          <button className="absolute -top-2 -right-2 text-[10px] text-white text-center bg-orange-500 w-[14px] h-[14px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="transition-all duration-300"
        >
          {!open ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className={`transition-all duration-300 ease-in-out ${
            open
              ? "flex opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-2"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-6 flex-col items-center gap-2 px-5 text-sm md:hidden z-500`}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>
            Products
          </NavLink>
          {user && (
            <NavLink to="/my-orders" onClick={() => setOpen(false)}>
              My Order
            </NavLink>
          )}
          <NavLink to="/" onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-orange-500 hover:bg-orange-600 transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-orange-500 hover:bg-orange-600 transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
