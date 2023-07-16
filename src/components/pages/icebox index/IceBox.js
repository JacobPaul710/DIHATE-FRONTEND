import { Link } from "react-router-dom";

function Icebox () {
    return(
        <>
            <div><h1>Welcome to your Icebox, User!</h1></div>
            <div><h1>Data displayed here</h1></div>
            <div>
                <Link to="/newmeal"><button>Enter a new meal here!</button></Link>
            </div>
        </>
    )
}

export default Icebox;