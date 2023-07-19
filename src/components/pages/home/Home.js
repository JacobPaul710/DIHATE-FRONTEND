import { Link, json, useNavigate } from "react-router-dom";
import { useState } from "react";

import './home.css'

function Home() {

        const Navigate = useNavigate();

        let [User, setUser] = useState({
            email: " ",
            password: " "
        })

        let [Errors, setErrors] = useState({
            email: " ",
            password: " "
        })

        function handleChange(e) {
            setUser((previousFormState) => ({
                ...previousFormState,
                [e.target.name]: e.target.value
            }));

            setErrors((previousFormState) => ({
                ...previousFormState, 
                [e.target.name]: "",
                }));
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
                // console.log(res.headers, 'headers here');
                // console.log(document.cookie, 'cookie here');
                const jsonRes = await res.json();
                // console.log('logged in', jsonRes);
                const responseString = JSON.stringify(jsonRes);
                localStorage.setItem('response', responseString)
                if (jsonRes.errors) {
                    setErrors((previousFormState) => ({
                        ...previousFormState,
                        ...jsonRes.errors
                    }))
                    console.log(jsonRes.errors)
                }
                if (jsonRes.email)
                    Navigate('/icebox');
            }
            catch(error) {
                console.log(error)
            }
            finally {
                e.target.reset();
            }
        }
        

    return(
        <div className="container">
            <div className="row">
               <div className="col-12 title"><h1>Do I have anything to eat?</h1></div>
               </div>
                    <div className="col-12 intro"><h5>Use this simple site to help you keep track of your frozen meals.</h5>
                    </div>
                
            <div>
                {/* <fieldset> */}
                <form className="test" onSubmit={handleSubmit}>
                    <label className="form-label mt-4"><h5>Email: </h5></label>
                    <input className="input form-control col-6" type="email" placeholder="Enter Email" name="email" required onChange={handleChange} />
                    <div className="email error text-danger"><p>{Errors.email}</p></div>
                    <label className="form-label mt-4"><h5>Password: </h5></label>
                    <input className="form-control col-6" type="password" placeholder="Enter Password" name="password" required onChange={handleChange} />
                    <div className="passsword error text-danger"><p>{Errors.password}</p></div>
                    <br />

                    <button className="btn btn-success button">Log In</button>
                </form>
                {/* </fieldset> */}
                
            </div>
            <div className="col-12 create">
                <h5>Don't have an account? Create one here:</h5>
                <Link to="/registration"><button className="btn btn-primary">Create New Account</button></Link>
            </div>
           
            
        </div>
    )
}

export default Home;