import { useState } from "react"


type SignUpInputs = {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
    gender: string;
}


const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (inputs: SignUpInputs) => {
    try {
        
    } catch (error) {
        
    }
  }
}

export default useSignup
