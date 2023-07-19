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
            console.log(mealData, "mealdata");
            setPosts(mealData);
            console.log(posts,"posts");
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
            <div><h1>Welcome to your Icebox, {username}!</h1>
            <button >Log Out</button></div>

            {currentPost.map((post) => {
                let formatted = moment(post.date).format("MM/DD/YYYY")
                return (
                            <div key={post._id}>
                                <h3>Meal: {post.mealName}</h3>
                                <br />
                                <h3>Servings left: {post.servings}</h3>
                                <br />
                                <h3>Date cooked: {formatted}</h3>
                                <button onClick={addServing}>+</button>
                                <button onClick={subServing}>-</button>
                                <div>
                                    <Link to="/editmeal"><button>Edit</button></Link>
                                    <Link to="/deletemeal"><button>Delete</button></Link>
                                </div>
                            </div>
                            
                        
                )
            })}
            <div className='container mt-5'>
            <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
            </div>
            <div>
                <Link to="/newmeal"><button>Enter a new meal here!</button></Link>
            </div>
        </div>
    )
}

export default Icebox;