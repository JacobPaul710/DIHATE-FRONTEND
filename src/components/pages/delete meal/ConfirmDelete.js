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
        <div className="container">
                <div className="row">
                    <div className="col-12 edit-intro"> 
                    <h1>You are <span className="text-danger">deleting</span> <span className="text-warning">{mealName}</span> from<span className="text-primary">{username}'s</span> Icebox!</h1>
                    </div>
                </div>
            <div className="col-12 confirm">
                <h2>Are you sure to want to remove this meal from your Icebox?</h2>
                <h3>You can re-add this meal at any time.</h3>
            </div>
            <div className="col-12 ui">
                <button class="btn btn-danger" onClick={handleDelete}>Delete</button>
                <Link to="/icebox"><button className="btn btn-primary btn-sm">Back to Icebox!</button></Link>
            </div>
        </div>
    )
}

export default ConfirmDelete;