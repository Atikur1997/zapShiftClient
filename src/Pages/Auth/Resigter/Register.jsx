import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const handleRegistration = (data) => {
    console.log("after having: ", data);
  };

  return (
    <div className="min-h-screen bg-green-400 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6">Register Now!</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(handleRegistration)}>
          <fieldset className="space-y-4">
            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Enter password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm">
                  Must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm">
                  Need uppercase, number & special character
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="label">Confirm Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Re-enter password"
                {...register("confirmPassword", {
                  required: true,
                })}
              />

              {/* Required */}
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">Please confirm password</p>
              )}

              {/* 🔥 Live mismatch */}
              {confirmPassword && confirmPassword !== password && (
                <p className="text-red-500 text-sm">Passwords do not match</p>
              )}

              {/* ✅ Match success */}
              {confirmPassword && confirmPassword === password && (
                <p className="text-green-500 text-sm">Password matched ✅</p>
              )}
            </div>

            {/* Button */}
            <button className="btn btn-neutral w-full mt-2">Register</button>
          </fieldset>
        </form>

        {/* Redirect */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-blue-500 underline font-semibold"
          >
            Sign in
          </NavLink>
        </p>
        <button className="btn bg-white w-full text-black text-md md:text-lg border-[#e5e5e5] mt-4 hover:bg-gray-100">
          <svg
            aria-label="Google logo"
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
