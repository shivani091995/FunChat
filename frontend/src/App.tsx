import Login from "./pages/login/Login";
import "./App.css";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "./components/skeleton/Loading";

function App() {

  const { authUser, isLoading } = useAuthContext();
  console.log(authUser);


  if(isLoading){
    return <LoadingScreen/>
  }
  
  return (
    <div className='main-container'>
      <Routes>
        <Route path="/" element={ authUser ? <Home/> : <Navigate to={'/login'} />} />
        <Route path="/login" element={!authUser ? <Login/> : <Navigate to={'/'}  />} />
        <Route path="/signup" element={ !authUser ? <SignUp/> : <Navigate to={'/'} />} />
      </Routes>
      <Toaster />  
    </div>
  );
}

export default App;
