import { Link } from "react-router-dom";

function NewMeal () {
    return(
        <>
            <h1>You are entering a new meal into User's Icebox!</h1>
            <form>
                <input placeholder="Enter desired meal name" />
                <br />
                <input placeholder="How many servings are you freezing?" />
                <br />
                <input placeholder="What date was this meal cooked? (00-00-00)" />
                <br />
                <button>Enter into Icebox!</button>
            </form>
            <Link to="/icebox"><button>Back to Icebox</button></Link>
        </>
    )
}

export default NewMeal;