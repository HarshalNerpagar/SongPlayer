import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectID: "f104bi07c490",
          },
          body: JSON.stringify({ name, email, password, appType: "music" }),
        }
      );

      const data = await response.json();
      if (data.status === "success") {
        toast.success("Sign Up Successful");
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('Error signing up')
    }
  };

  return (
    <div className="flex  min-h-screen bg-gray-100">
      <div className="w-[50%] bg-[#714060]">
        <img
          className=" p-[15%] pb-[2%]"
          src="https://staticfe.saavn.com/web6/jioindw/dist/1715835069/_i/artist/AtifAslam.png"
        />
        <h1 className=" text-center text-4xl font-normal text-white">
          All Your Music.
        </h1>
        <p className=" text-center text-[#C36DA6]">Anytime, anywher</p>
      </div>

      <div className="bg-[#F4F4F4] p-6 rounded shadow-md w-[50%]">
        <div className=' pt-[30%] p-[20%] '>
        <h2 className=" text-center text-4xl font-medium mb-6">Create an Account</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            {/* <label className="block text-gray-700">Name</label> */}
            <input
              placeholder="Enter Username"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700">Email</label> */}
            <input
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700">Password</label> */}
            <input
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2BC5B4] text-white py-2 rounded"
          >
            Continue
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Log In
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
