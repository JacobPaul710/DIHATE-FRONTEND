import { Link } from "react-router-dom";

function EditMeal () {
    return (
        <>
            <h1>You are editing "meal" in "User's" Icebox!</h1>
            <Link to="/editmeal"><button>Submit edit to Icebox!</button> </Link>
            <br />
            <Link to="/icebox"><button>Back to Icebox!</button> </Link>
        </>
    )
}

export default EditMeal;