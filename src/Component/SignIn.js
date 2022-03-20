import React, { useState } from "react";
import "./SignIn.css";
import Logo from "../images/logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import BG from "../images/bg.png";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.email === "") {
      setError("Please enter your email!");
      return;
    }
    if (data.password === "") {
      setError("Please enter your password!");
      return;
    }
    setError("");
    console.log(data);
  };

  return (
    <div>
      <div className="grid grid-cols-3 relative">
        <div className="color col-span-2">
          <div className="container">
            <img width="400" src={BG} alt="background" />
          </div>
        </div>
        <div className="bg-white"></div>
        <div className="absolute w-full">
          <div className="container">
            <div className="grid gap-10 md:grid-cols-2 grid-cols-1 py-5">
              <div></div>
              <div className="lg:px-14 md:px-6 px-6">
                <div className="bg-white shadow-lg shadow-gray-800/50 text-center lg:p-14 p-8 rounded">
                  <img
                    className="mx-auto mb-6"
                    width="120"
                    height="120"
                    src={Logo}
                    alt=""
                  />
                  <form onSubmit={handleSubmit} className="px-4">
                    <input
                      className="border px-2 py-1 w-full mb-3 rounded"
                      type="email"
                      placeholder="Enter name"
                      required
                      onBlur={handleUserInput}
                      name="email"
                    />
                    <input
                      className="border px-2 py-1 w-full rounded"
                      type="password"
                      placeholder="Enter password"
                      required
                      onBlur={handleUserInput}
                      name="password"
                    />
                    <small className="text-red-600 text-right block font-semibold mb-3 mt-1">
                      Forgot Password?
                    </small>
                    <button
                      type="submit"
                      className="bg-indigo-800 block w-full py-1 rounded text-white"
                    >
                      Sign in
                    </button>
                  </form>
                  <div className="mt-8">
                    <div className="w-full border-t border-black rounded"></div>
                    <p className="-mt-14 inline-block bg-white p-4 font-semibold">
                      Or
                    </p>
                  </div>
                  <div>
                    <button className="text-2xl mr-10">
                      {
                        <FacebookRoundedIcon
                          style={{ color: "#3B5998", fontSize: "50" }}
                        />
                      }
                    </button>
                    <button className="text-2xl">
                      {
                        <GoogleIcon
                          style={{ color: "4285F4", fontSize: "50" }}
                        />
                      }
                    </button>
                    <p className="text-sm mt-10">
                      Don't have an account?{" "}
                      <button className="text-sky-500 font-semibold">
                        Sign up
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
