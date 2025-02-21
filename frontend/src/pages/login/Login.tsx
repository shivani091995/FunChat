import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const {loading, login } = useLogin();

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    login(inputs.username, inputs.password)  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)] bg-white/10 backdrop-filter backdrop-blur-md">
        <h1 className="flex flex-col text-4xl font-bold text-center text-white mb-8">
          Welcome Back
          <span className="text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
            FunChat
          </span>
        </h1>

        <form onSubmit={handleSubmitForm} className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center text-white/90 font-medium pl-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full h-12 px-4 text-lg bg-white/10 border border-white/20 rounded-xl
                focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                text-white placeholder-white/50 transition-all duration-300"
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username : e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-white/90 font-medium pl-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-12 px-4 text-lg bg-white/10 border border-white/20 rounded-xl
                focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                text-white placeholder-white/50 transition-all duration-300"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password : e.target.value})}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="w-full py-3 px-6 text-lg font-semibold text-white 
                bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl
                hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-purple-500/70"
                disabled={loading}
            >
              {loading? "Loading..." : "Login"}
            </button>

            <Link 
              to={'/signup'} 
              className="text-center text-white/70 hover:text-purple-400 
                transition-colors duration-300 text-sm"
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
