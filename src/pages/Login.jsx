import React from "react";
import LoginComponent from "../components/LoginComponent";
import image from "../assets/images.png";

function LoginPage() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-full max-w-md m-auto p-8 bg-white shadow-lg rounded-lg">
          <div className="flex justify-center mb-4">
            <img
              src={image} // Adding the imported image as the src
              alt="Your Company"
              width={150}
              height={150}
              className="rounded-full" // Optional styling (e.g., rounded corners)
            />
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">
            Sign in to your account
          </h2>
          <p className="text-sm text-center mb-6">
            Not a member?{" "}
            <a href="/signup" className="text-red-600 hover:text-red-500">
              Sign Up
            </a>
          </p>
          <LoginComponent />
        </div>
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('/8018766.jpg')",
          }}
        ></div>
      </div>
    </>
  );
}

export default LoginPage;
