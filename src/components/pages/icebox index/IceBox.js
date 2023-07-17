import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Icebox () {

    const [meals, setMeals] = useState([]);

    const fetchMeals = async () => {
        try {
            // let mealData = await fetch('http://localhost:4000/icebox');
            let mealData = await fetch('https://jsonplaceholder.typicode.com/posts');
            mealData = await mealData.json();
            setMeals(mealData);
        }
        catch (err) {
            let error = err.message;
            console.log(error)
        }
    }


    useEffect(() => {
        fetchMeals();
    }, []);

    return(
        <>
            <div><h1>Welcome to your Icebox, User!</h1></div>

            {meals.map((meal) => {
                return (
                    <div key={meal._id}>
                        {/* <h3>{meal.name}</h3> */}
                        <h3>{meal.id}</h3>
                        {/* <h3>{meal.servings}</h3> */}
                        <h3>{meal.title}</h3>
                        <h3>{meal.body}</h3>
                        {/* <h3>{meal.date}</h3> */}
                    </div>
                )
            })}

            <div>
                <Link to="/editmeal"><button>Edit</button></Link>
                <Link to="/newmeal"><button>Enter a new meal here!</button></Link>
                <Link to="/deletemeal"><button>Delete</button></Link>
            </div>
        </>
    )
}

export default Icebox;