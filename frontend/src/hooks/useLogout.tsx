import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";



const useLogout = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-type": "application/json" },
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setAuthUser(null);
        } catch (error: any) {
            console.error(error.message);
            
        }
        finally{
            setLoading(false);
        }
    }

    return { loading, logout }; 



}

export default useLogout;