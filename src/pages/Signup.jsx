import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const handleSignUp = async (username, email, password) => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Signup successful! Please log in.");
        resetForm();
      } else {
        toast.error(data.message || "Signup failed.");
        console.log("error");
      }
    } catch (error) {
      toast.error("Failed to connect to the server.");
      console.log("error");
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!");
        console.log("login Success");
        // Perform further actions after login
        resetForm();
      } else {
        toast.error(data.message || "Login failed.");
        console.log("error");
      }
    } catch (error) {
      toast.error("Failed to connect to the server.");
      console.log("error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      // Signup
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }
      if (email === "" || username === "" || password === "") {
        toast.error("Please fill in all fields");
        return;
      }
      handleSignUp(username, email, password);
    } else {
      // Login
      if (email === "" || password === "") {
        toast.error("Please fill in all fields");
        return;
      }
      handleLogin(email, password);
    }
  };

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="relative">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Username
              </label>
              <motion.input
                id="username"
                type="text"
                required={!isLogin}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                whileFocus={{ scale: 1.05 }}
              />
            </div>
          )}

          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <motion.input
              id="email"
              type="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <motion.input
              id="password"
              type="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          {!isLogin && (
            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Confirm Password
              </label>
              <motion.input
                id="confirmPassword"
                type="password"
                required={!isLogin}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                whileFocus={{ scale: 1.05 }}
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <a
              href="#"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </a>
          </p>
        </form>
      </motion.div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AuthForm;
