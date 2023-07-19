import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ConfirmDelete () {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    function displayUser () {
        const responseString = localStorage.getItem('response');
        const response = JSON.parse(responseString);
        const username = response.username;
        return setUsername(username);
    }
    const { mealName, id } = useParams();
    async function handleDelete () {
        try {
        await fetch(`http://localhost:4000/delete/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    } finally {
        navigate('/icebox')
    }
    }
    
    useEffect(() => {
        displayUser();
    }, []);

    return(
        <>
            <div>
                <h1>You are deleting {mealName} from {username}'s Icebox!</h1>
            </div>
            <div>
                <h2>Are you sure to want to remove this meal from your Icebox?</h2>
                <h3>You can re-add this meal at any time.</h3>
            </div>
            <button onClick={handleDelete}>Delete</button>
            <Link to="/icebox"><button>Back to Icebox!</button></Link>
        </>
    )
}

export default ConfirmDelete;