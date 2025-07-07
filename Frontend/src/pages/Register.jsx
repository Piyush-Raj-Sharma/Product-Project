import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { asyncRegisterUsers } from "../store/actions/userActions";

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = null;
    dispatch(asyncRegisterUsers(user));
    navigate('/login');
    // console.log("New User:", user);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 px-4">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="w-full max-w-sm bg-slate-800 p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-blue-400">
          Create Account
        </h2>

        {/* Username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-sm text-slate-300">
            Username
          </label>
          <input
            {...register("username", { required: "Username is required" })}
            type="text"
            id="username"
            autoComplete="username"
            placeholder="Enter your username"
            className="p-2 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <span className="text-red-500 text-sm">
              {errors.username.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-slate-300">
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            autoComplete="email"
            id="email"
            placeholder="Enter your email"
            className="p-2 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm text-slate-300">
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            autoComplete="new-password"
            id="password"
            placeholder="Enter your password"
            className="p-2 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition duration-200"
        >
          Register User
        </button>

        <p className="text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
