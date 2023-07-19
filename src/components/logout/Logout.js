import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Logout() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            localStorage.removeItem('response');
            await fetch('https://dihate-backend.onrender.com/logout');
            
        }
        catch (err) {
            console.log(err);
        } 
     
    } 
    useEffect(() => {
        handleLogout();
        navigate('/');
    })
    handleLogout();
} 

export default Logout;
