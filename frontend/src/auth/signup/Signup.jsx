import React from "react";
import { useForm } from "react-hook-form";
import instance from "../../api/axios"; // Adjust the import path for your project
import './Signup.css'

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Data being sent:", data); 
      const response = await instance.post("/auth/signup", data); 
      console.log("Signup successful:", response);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="signup-container flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Signup</h2>

        {/* CNIC Field */}
        <div className="mb-4">
          <label htmlFor="cnic" className="block text-gray-700 font-medium">
            CNIC (13 Digits)
          </label>
          <input
            id="cnic"
            type="text"
            {...register("cnic", {
              required: "CNIC is required",
              pattern: {
                value: /^\d{13}$/,
                message: "CNIC must be 13 digits",
              },
            })}
            placeholder="Enter your CNIC"
            className={`w-full mt-2 p-2 border rounded-lg ${
              errors.cnic ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.cnic && (
            <span className="text-red-500 text-sm">{errors.cnic.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            placeholder="Enter your email"
            className={`w-full mt-2 p-2 border rounded-lg ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

