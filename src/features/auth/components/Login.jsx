import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import BtnSpinner from "../../../components/BtnSpinner";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [token, setToken] = useCookie("token");
  const [userCookie, setUserCookie] = useCookie("user");
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const res = await fetch(import.meta.env.VITE_API_URL + "/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Login successfully");
      setToken(json.token);
      setUserCookie(JSON.stringify(json.user));
      navigate("/dashboard");
    } else {
      toast.error(json.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="w-2/3 lg:w-1/2 xl:w-1/3">
      <h1 className="text-2xl font-bold mb-5">Sign in</h1>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          {...register("email")}
          className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your password
        </label>
        <input
          type="password"
          {...register("password")}
          className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="••••••••"
          required
        />
      </div>
      <div className="flex items-start justify-end pe-3 mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            defaultValue
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
        </div>
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="text-white flex justify-center sm:justify-start items-center gap-2 bg-blue-700 hover:bg-blue-800 outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign in {isSubmitting && <BtnSpinner />}
      </button>
      <p className="text-sm text-center text-black dark:text-gray-400 mt-5">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-sky-600 hover:underline dark:text-sky-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Login;
