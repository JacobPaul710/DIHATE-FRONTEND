import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Pagination from "../../Pagination";
import moment from 'moment';


import './icebox.css'


function Icebox ( ) {

    // const [meals, setMeals] = useState([]);
    

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(8);
    const [servings, setServings] = useState(0);
    const [username, setUsername] = useState('');


    const fetchMeals = async () => {
        // console.log(document.cookie);
        const token = Cookies.get('jwt');
        // console.log(token);
        try {
            let mealData = await fetch('http://localhost:4000/icebox', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            }
            );
            // let mealData = await fetch('https://jsonplaceholder.typicode.com/posts');
            mealData = await mealData.json();
            // console.log(mealData, "mealdata");
            setPosts(mealData);
            // console.log(posts,"posts");
        }
        catch (err) {
            let error = err.message;
            console.log(error)
        }
    }

    // I want create a button that will add to each meal serving from its current number. 
    // I need to have useState set the current number of servings to whatever it is in the database. And then when the button is clicked, I need useEffect to update that number by 1. 
    //Unsure how to grab the number of servings after the data is mapped through. 
    function addServing () {

    }

    function subServing () {
        
    }

    function displayUser () {
        const responseString = localStorage.getItem('response');
        const response = JSON.parse(responseString);
        const username = response.username;
        return setUsername(username);
    }

    useEffect(() => {
        fetchMeals();
        displayUser()
    }, []);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
   

    return(
        <div className="container">
            <div><h1>Welcome to your Icebox, {username}!</h1></div>
           <div><Link to="/logout" ><button class="btn btn-secondary" >Log Out</button></Link></div>
           <div>
                <Link to="/newmeal"><button class="btn btn-success">Enter a new meal here!</button></Link>
            </div>

            {currentPost.map((post) => {
                let formatted = moment(post.date).format("MM/DD/YYYY")
                return (
                            <div key={post._id} className="col-md-6 card">
                                <div className="card-body">
                                <h5 className="card-title">Meal: {post.mealName}</h5>
                                <br />
                                <p className="card-text">Servings left: {post.servings}</p>
                                <br />
                                <p className="card-text">Date cooked: {formatted}</p>
                                <button onClick={addServing}>+</button>
                                <button onClick={subServing}>-</button>
                                <div>
                                    <Link to="/editmeal"><button class="btn btn-info">Edit</button></Link>
                                    <Link to={`/confirm/${post.mealName}/${post._id}`}><button class="btn btn-danger">Delete</button></Link>
                                </div>
                                </div>
                            </div>
                            
                        
                )
            })}
            <div className='container mt-5'>
            <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
            </div>
        </div>
    )
}

export default Icebox;