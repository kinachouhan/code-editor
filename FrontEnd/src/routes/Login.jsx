import { useState } from "react";
import { FaRegFileCode } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authFailure, authStart, authSuccess } from "../redux/userSlice.js";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [submit, setSubmit] = useState({
    userName: "",
    password: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSubmit((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(authStart());

    if (!submit.userName || !submit.password) {
      toast.error("Username and password are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:3100/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(submit)
      });

      const data = await response.json();

      if (!data.success) {
        toast.error("Please enter valid username and password");
        return;
      }

      dispatch(authSuccess(data.user));
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      dispatch(authFailure("Login failed"));
      console.log(error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center px-4">
      <div className="bg-white flex flex-col justify-center items-center p-6 md:p-10 rounded-xl w-full max-w-md md:max-w-lg">
        <h1 className="font-bold text-6xl md:text-7xl"><FaRegFileCode /></h1>
        <h1 className="font-bold text-3xl md:text-4xl text-center mt-4">Login</h1>

        <form className="flex flex-col gap-4 w-full mt-4">
          <input
            className="border border-gray-200 p-2 rounded-sm w-full"
            name="userName"
            placeholder="Username"
            onChange={handleInput}
          />
          <input
            className="border border-gray-200 p-2 rounded-sm w-full"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleInput}
          />
          <button
            onClick={handleLogin}
            className="p-2 border border-black text-lg rounded-sm hover:bg-black hover:text-white cursor-pointer w-full"
          >
            Login
          </button>

          <div className="flex  sm:flex-row justify-between text-sm mt-2">
            <p>Doesn't have an account?</p>
            <Link className="text-blue-500 hover:underline mt-1 sm:mt-0" to="/signup">Sign Up</Link>
          </div>
        </form>

        <p className="text-gray-500 text-center text-xs md:text-sm mt-4">
          By continuing, you agree to DevSync's Terms of Service and{" "}
          <span className="hover:underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};
