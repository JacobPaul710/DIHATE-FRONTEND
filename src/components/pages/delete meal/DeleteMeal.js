import { Link } from "react-router-dom";

function DeleteMeal () {
    return(
        <>
            <div>
                <h1>You are deleting "meal" from "User's" Icebox!</h1>
            </div>
            <div>
                <h2>Are you sure to want to remove this meal from your Icebox?</h2>
                <h3>You can re-add this meal at any time.</h3>
            </div>
            <button>Yes, delete.</button>
            <br />
            <Link to="/icebox"><button>Back to Icebox!</button></Link>
        </>
    )
}

export default DeleteMeal;