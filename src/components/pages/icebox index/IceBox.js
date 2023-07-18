import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Pagination from "../../Pagination";

import './icebox.css'


function Icebox () {

    // const [meals, setMeals] = useState([]);

    const [posts, setPosts] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(8);
    const [servings, setServings] = useState(0);


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
            // console.log(mealData);
            mealData = await mealData.json();
            setPosts(mealData);
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
        let currentServings = servings;
        currentServings++;
        setServings(currentServings);
        console.log('serving added')
    }

    function subtractServing () {
        let currentServings = servings;
        currentServings--;
        setServings(currentServings);
        console.log('serving subtracted')
    }

    useEffect(() => {
        fetchMeals();
    }, []);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className="container">
            <div><h1>Welcome to your Icebox, User!</h1>
            <button >Log Out</button></div>

            {currentPost.map((post) => {
                return (
                    <>
                        
                            <div className="col-6" key={post.id}>
                                <h3>{post.id}</h3>
                                <h3>{post.mealName}</h3>
                                <h3>{post.servings}</h3>
                                <h3>{post.date}</h3>
                                <button onClick={addServing}>+</button>
                                <button onClick={subtractServing}>-</button>
                                <div>
                                    <Link to="/editmeal"><button>Edit</button></Link>
                                    <Link to="/deletemeal"><button>Delete</button></Link>
                                </div>
                            </div>
                            
                        </>
                        
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