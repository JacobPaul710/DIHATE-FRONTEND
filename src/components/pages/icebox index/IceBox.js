import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Pagination from "../../Pagination";


function Icebox () {

    // const [meals, setMeals] = useState([]);

    const [posts, setPosts] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);


    const fetchMeals = async () => {
        // console.log(document.cookie);
        // const token = Cookies.get('jwt');
        // console.log(token);
        try {
        //     let mealData = await fetch('http://localhost:4000/icebox', {
        //         method: 'GET',
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //             'Content-Type': 'application/json',
        //         },
        //         credentials: 'include'
        //     }
        //     );
            let mealData = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(mealData);
            mealData = await mealData.json();
            setPosts(mealData);
        }
        catch (err) {
            let error = err.message;
            console.log(error)
        }
    }


    useEffect(() => {
        fetchMeals();
    }, []);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <>
            <div><h1>Welcome to your Icebox, User!</h1></div>

            {currentPost.map((post) => {
                return (
                    <>
                        <div key={post.id}>
                        {/* <div key={meal._id}> */}
                            {/* <h3>{meal.name}</h3> */}
                            <h3>{post.id}</h3>
                            {/* <h3>{meal.servings}</h3> */}
                            <h3>{post.title}</h3>
                            <h3>{post.body}</h3>
                            {/* <h3>{meal.date}</h3> */}
                            <Link to="/editmeal"><button>Edit</button></Link>
                            <Link to="/deletemeal"><button>Delete</button></Link>
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
        </>
    )
}

export default Icebox;