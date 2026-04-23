import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { registerUser, signInWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  // 🔹 Email + Password Registration
  const handleRegistration = (data) => {
    console.log("Form Data:", data);
    const { email, password } = data;

    registerUser(email, password)
      .then((result) => {
        console.log("User Registered:", result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // 🔹 Google Sign In (FIXED)
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
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
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
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

              {/* Toggle Icon */}
              <div className="absolute right-3 top-[35px] text-gray-500">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="label">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="input input-bordered w-full"
                placeholder="Re-enter password"
                {...register("confirmPassword", {
                  required: true,
                })}
              />

              {/* Errors */}
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">Please confirm password</p>
              )}

              {confirmPassword && confirmPassword !== password && (
                <p className="text-red-500 text-sm">Passwords do not match</p>
              )}

              {confirmPassword && confirmPassword === password && (
                <p className="text-green-500 text-sm">Password matched ✅</p>
              )}

              {/* Toggle Icon */}
              <div className="absolute right-3 top-[35px]">
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit */}
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

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white w-full text-black text-md md:text-lg border-[#e5e5e5] mt-4 hover:bg-gray-100 flex items-center justify-center gap-2"
        >
          <svg
            aria-label="Google logo"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            />
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            />
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            />
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            />
          </svg>
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
