import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewMeal () {
    const Navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [newMeal, setNewMeal] = useState(
        {
            mealName: '',
            servings: 0,
            date: 0
        }
    )

    function displayUser () {
        const responseString = localStorage.getItem('response');
        const response = JSON.parse(responseString);
        const username = response.username;
        return setUsername(username);
    }

    function onChange (e) {
        setNewMeal((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
            
        }))
    }

    
    async function handleSubmit(e) {
        try {
            e.preventDefault();
            const res = await fetch('http://localhost:4000/new', {
                method: "POST",
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
    return(
        <>
            <h1>You are entering a new meal into {username}'s Icebox!</h1>
            <form onSubmit={handleSubmit}>
                <label>Meal name: </label>
                <input type="text" placeholder="Enter desired meal name" name="mealName" required
                onChange={onChange}/>
                <br />
                <label>Servings:</label>
                <input type="number" placeholder="How many servings are you freezing?" name="servings"required onChange={onChange} />
                <br />
                <label>Date cooked:</label>
                <input type="date" placeholder="What date was this meal cooked?" name="date" required onChange={onChange} />
                <br />
                <button class="btn btn-success" >Enter into Icebox!</button>
            </form>
            <Link to="/icebox"><button class="btn btn-primary">Back to Icebox</button></Link>
        </>
    )
}



export default NewMeal;