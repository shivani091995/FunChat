import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";


const SignUp = () => {

  const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //await signup(inputs);
    
  }

  const handleCheckboxChange = (gender: "male" | "female") => {
		setInputs({ ...inputs, gender });
	};

  




  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)] bg-white/10 backdrop-filter backdrop-blur-md">
        <h1 className="flex flex-col text-4xl font-bold text-center text-white mb-8">
          Create Account
          <span className="text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
            FunChat
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center text-white/90 font-medium pl-2">
              Full Name
            </label>
            <input
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
              type="text"
              placeholder="Enter your full name"
              className="w-full h-12 px-4 text-lg bg-white/10 border border-white/20 rounded-xl
                focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                text-white placeholder-white/50 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-white/90 font-medium pl-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Choose a username"
              className="w-full h-12 px-4 text-lg bg-white/10 border border-white/20 rounded-xl
                focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                text-white placeholder-white/50 transition-all duration-300"
                value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-white/90 font-medium pl-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full h-12 px-4 text-lg bg-white/10 border border-white/20 rounded-xl
                focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                text-white placeholder-white/50 transition-all duration-300"
                value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-white/90 font-medium pl-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full h-12 px-4 text-lg bg-white/10 border border-white/20 rounded-xl
                focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                text-white placeholder-white/50 transition-all duration-300"
                value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          {/* <div className="space-y-2">
            <label className="flex items-center text-white/90 font-medium pl-2">
              Gender
            </label>
            <div className="flex gap-4 px-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="w-4 h-4 text-purple-500 focus:ring-purple-500 cursor-pointer"
                />
                <span className="text-white">Male</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="w-4 h-4 text-purple-500 focus:ring-purple-500 cursor-pointer"
                />
                <span className="text-white">Female</span>
              </label>
            </div>
          </div> */}
          <GenderCheckbox selectedGender={inputs.gender} onCheckboxChange={handleCheckboxChange} />

          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="w-full py-3 px-6 text-lg font-semibold text-white 
                bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl
                hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-purple-500/70"
            >
              Sign Up
            </button>

            <Link 
              to={'/login'}
              className="text-center text-white/70 hover:text-purple-400 
                transition-colors duration-300 text-sm"
            >
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};


export default SignUp
