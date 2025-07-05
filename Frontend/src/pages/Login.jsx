import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncLoginUsers } from "../store/actions/userActions";

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const loginHandler = (user) => {
    dispatch(asyncLoginUsers(user));
    // console.log(user);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 px-4 overflow-hidden">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="w-full max-w-sm bg-slate-800 p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-blue-400">
          Login to Your Account
        </h2>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-slate-300">
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="p-2 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm text-slate-300">
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            id="password"
            placeholder="Enter your password"
            className="p-2 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition duration-200"
        >
          Login
        </button>

        <p className="text-center text-sm text-slate-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
