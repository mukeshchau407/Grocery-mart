import React from "react";
import { FaEnvelope, FaLock, FaTimes, FaUser } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const { setShowUserLogin, setUser } = useAppContext();

  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser({
      email: "example@gmail.com",
      name: "bigmart",
    });
    setShowUserLogin(false);
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col md:flex-row w-full max-w-4xl max-h-screen bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="hidden md:flex md:w-1/2 bg-orange-300 items-center justify-center p-8">
          <img
            className="max-h-full max-w-full object-contain"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
            alt="Login illustration"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center overflow-y-auto">
          <div className="w-full max-w-md">
            <h2 className="text-3xl sm:text-4xl text-orange-500 font-bold text-center">
              {state === "login" ? "Login" : "Sign Up"}
            </h2>

            {state === "login" ? (
              <div className="w-full flex flex-col items-center">
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Welcome back! Please sign in to continue
                </p>

                <button
                  type="button"
                  className="w-full mt-6 sm:mt-8 bg-gray-100 flex items-center justify-center h-12 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                    alt="Google logo"
                    className="h-5"
                  />
                </button>

                <div className="flex items-center gap-4 w-full my-5">
                  <div className="w-full h-px bg-gray-300"></div>
                  <p className="whitespace-nowrap text-sm text-gray-500 text-center">
                    or sign in with email
                  </p>
                  <div className="w-full h-px bg-gray-300"></div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500 mt-3 text-center">
                Welcome ! Please create account to continue
              </p>
            )}

            {state === "register" && (
              <div className="flex items-center w-full bg-transparent border border-gray-300 h-12 rounded-full overflow-hidden px-6 mb-4 sm:mb-6 mt-4 sm:mt-6 gap-2">
                <FaUser className="text-gray-400 mt-0.5" />
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Username"
                  className="bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm w-full h-full"
                  required
                />
              </div>
            )}

            <div className="flex items-center w-full bg-transparent border border-gray-300 h-12 rounded-full overflow-hidden px-6 gap-2">
              <FaEnvelope className="text-gray-400 mt-0.5" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email id"
                className="bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm w-full h-full"
                required
              />
            </div>

            <div className="flex items-center mt-4 sm:mt-6 w-full bg-transparent border border-gray-300 h-12 rounded-full overflow-hidden px-6 gap-2">
              <FaLock className="text-gray-400 mt-0.5" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm w-full h-full"
                required
              />
            </div>

            {state === "login" && (
              <div className="w-full flex sm:flex-row items-center justify-between mt-6 sm:mt-8 text-gray-500 gap-2">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <input
                    className="h-4 w-4 cursor-pointer"
                    type="checkbox"
                    id="checkbox"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="checkbox">
                    Remember me
                  </label>
                </div>
                <a
                  className="text-sm underline w-full sm:w-auto text-right hover:text-gray-700 cursor-pointer"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
            )}

            <button className="mt-6 sm:mt-8 w-full h-11 rounded-full text-white bg-orange-500 hover:bg-orange-500/95 transition-colors cursor-pointer">
              {state === "register" ? "Sign Up" : "Login"}
            </button>

            {state === "register" ? (
              <p className="text-gray-500 text-sm mt-4 text-center">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-orange-500 font-medium hover:text-orange-600 cursor-pointer"
                  onClick={() => setState("login")}
                >
                  Login
                </button>
              </p>
            ) : (
              <p className="text-gray-500 text-sm mt-4 text-center">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-orange-500 font-medium hover:text-orange-600 cursor-pointer"
                  onClick={() => setState("register")}
                >
                  Sign Up
                </button>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
