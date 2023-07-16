import { Link } from "react-router-dom";

function Home() {
    return(
        <>
            <div>
                <h1>Do I have anything to eat?</h1>
            </div>
            <div>
                <form>
                    <input placeholder="Username" />
                    <br />
                    <input placeholder="Password" />
                    <br />
                    <button>Log in</button>
                </form>
            </div>
            <div>
                <h2>Don't have an account? Create one here:</h2>
            </div>
            <div>
                <Link to="/newaccount"><button>Create New Account</button></Link>
            </div>
        </>
    )
}

export default Home;