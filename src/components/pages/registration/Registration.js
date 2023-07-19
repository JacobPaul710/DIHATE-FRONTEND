import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
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
        try {
            e.preventDefault();
            const res = await fetch('https://dihate-backend.onrender.com/signup', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newUser),
                credentials: "include"
            })
            const jsonRes = await res.json();
            const responseString = JSON.stringify(jsonRes);
            localStorage.setItem('response', responseString)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            e.target.reset();
            Navigate('/icebox');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 new-intro">
                    <h1>You are creating a new account!</h1>
                </div>
                <div>
                    <form className="form" onSubmit={handleSubmit}>
                        <label className="form-label mt-4">Email: </label>
                        <input className="input form-control col-6" type="email" placeholder="Enter Email" name="email" required onChange={handleChange} />
                        <div className="email error"></div>
                        <br />
                        <label className="form-label mt-4">Username: </label>
                        <input className="input form-control col-6" type="text" placeholder="Enter Username" name="username" required onChange={handleChange} />
                        <div className="username error"></div>
                        <br />
                        <label className="form-label mt-4">Password: </label>
                        <input className="input form-control col-6" type="password" placeholder="Enter Password" name="password" required onChange={handleChange} />
                        <div className="passsword error"></div>
                        <br />
                        <button className="btn btn-success ">Confirm Signup</button>
                    </form>
                </div>
                <div className="col-12 ui">
                    <Link to='/'><button className="btn btn-primary btn-sm">Nevermind, I have one.</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Registration;