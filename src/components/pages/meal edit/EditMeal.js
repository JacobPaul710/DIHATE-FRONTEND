import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import './editmeal.css';

function EditMeal() {
    const Navigate = useNavigate();
    const { mealName, id } = useParams();
    const [username, setUsername] = useState('');
    const [newMeal, setNewMeal] = useState(
        {
            mealName: '',
            servings: 0,
            date: 0
        }
    )

    function displayUser() {
        const responseString = localStorage.getItem('response');
        const response = JSON.parse(responseString);
        const username = response.username;
        return setUsername(username);
    }

    function onChange(e) {
        setNewMeal((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value

        }))
    }


    async function handleSubmit(e) {
        try {
            e.preventDefault();
            await fetch(`https://dihate-backend.onrender.com/edit/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newMeal),
                credentials: "include"
            })
        } catch (error) {
            console.log(error);
        }
        finally {
            e.target.reset();
            Navigate('/icebox');
        }
    }



    useEffect(() => {
        displayUser()
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 edit-intro"><h1>You are editing <span className="text-warning">{mealName}</span> in <span className="text-primary">{username}'s</span> Icebox!</h1>
                </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <label className="form-label mt-4">{mealName}: </label>
                <input className="input form-control col-6" type="text" placeholder="Enter new desired meal name" name="mealName" required
                    onChange={onChange} />
                <br />
                <label className="form-label mt-4">Servings:</label>
                <input className="input form-control col-6" type="number" placeholder="How many servings are you freezing?" name="servings" required onChange={onChange} />
                <br />
                <label className="form-label mt-4">Date cooked:</label>
                <input className="input form-control col-6 date" type="date" name="date" required onChange={onChange} />
                <br />
                <button className="btn btn-success" >Update Icebox!</button>
            </form>
            <div className="col-12 ui">
                <Link to="/icebox"><button className="btn btn-primary btn-sm">Back to Icebox</button></Link>
            </div>
        </div>
    )
}



export default EditMeal;