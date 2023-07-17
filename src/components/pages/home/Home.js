import { Link, json, useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {

    const Navigate = useNavigate();

    let [User, setUser] = useState({
        email: " ",
        password: " "
    })

    function handleChange(e) {
        setUser((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        try{
            let email = User.email;
            let password = User.password;
            e.preventDefault();
           const res = await fetch('http://localhost:4000/login', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email, password }),
                credentials: "include"
            })
            const jsonRes = await res.json();
            // console.log('logged in', jsonRes);
            if (jsonRes.errors) {
                console.log(jsonRes.errors)
            }
            if (jsonRes.user)
                Navigate('/icebox');
        }
        catch(error) {
            console.log(error)
        }
        finally {
            e.target.reset();
            // Navigate('/icebox');
        }
    }
//we need a conditional for if user is returned, to redirect to icebox. otherwise back to login page 

    return(
        <>
            <div>
                <h1>Do I have anything to eat?</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Email: </label>
                    <input type="email" placeholder="Enter Email" name="email" required onChange={handleChange} />
                    <div className="email error"></div>
                    <br />
                    
                    <label>Password: </label>
                    <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange} />
                    <div className="passsword error"></div>
                    <br />

                    <button>Log In</button>
                </form>
                
            </div>
            <div>
                <h2>Don't have an account? Create one here:</h2>
            </div>
            <div>
                <Link to="/registration"><button>Create New Account</button></Link>
            </div>
        </>
    )
}

export default Home;