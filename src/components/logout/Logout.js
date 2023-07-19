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
        // finally {
        //     navigate('/');
        // }
    } 
    useEffect(() => {
        handleLogout();
        navigate('/');
    })
    handleLogout();
} 

export default Logout;

//cookie is being reset by logout function correctly, but browser is possibly caching it. Local storage is removed so user is still logged out, but cookie remains. 