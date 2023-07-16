import { Link } from "react-router-dom";

function Registration () {
    return(
        <>
            <div>
                <h1>You are creating a new account!</h1>

                <div>
                    <form>
                        <input placeholder="Enter Email" />
                        <br />
                        <input placeholder="Enter Username" />
                        <br />
                        <input placeholder="Enter Password" />
                        <br />
                        <button>Confirm Signup</button>
                    </form>
                </div>

                <Link to='/'><button>Nevermind, I have one.</button></Link>
            </div>
        </>
    )
}

export default Registration;