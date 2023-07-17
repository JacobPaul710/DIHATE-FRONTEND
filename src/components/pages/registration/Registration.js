import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration () {

    const Navigate = useNavigate();

    let [newUser, setNewUser] = useState({
        username: " ",
        email: " ",
        password: " "
    })


    function handleChange(e) {
        setNewUser((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        try{
            e.preventDefault();
           const res = await fetch('http://localhost:4000/signup', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newUser),
                credentials: "include"
            })
            // console.log(res);
        }
        catch(error) {
            console.log(error)
        }
        finally {
            e.target.reset();
            Navigate('/icebox');
        }
    }




    return(
        <>
            <div>
                <h1>You are creating a new account!</h1>

                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Email: </label>
                        <input type="email" placeholder="Enter Email" name="email" required onChange={handleChange}/>
                        <div className="email error"></div>
                        <br />
                        <label>Username: </label>
                        <input type="text" placeholder="Enter Username" name="username" required onChange={handleChange}/>
                        <div className="username error"></div>
                        <br />
                        <label>Password: </label>
                        <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange}/>
                        <div className="passsword error"></div>
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