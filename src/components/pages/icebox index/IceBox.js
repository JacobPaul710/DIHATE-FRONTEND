import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Pagination from "../../pagination/Pagination";
import moment from 'moment';


import './icebox.css'


function Icebox() {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);
  const [username, setUsername] = useState('');


  const fetchMeals = async () => {
    const token = Cookies.get('jwt');
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
      mealData = await mealData.json();
      setPosts(mealData);
    }
    catch (err) {
      let error = err.message;
      console.log(error)
    }
  }


  function displayUser() {
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

  return (
    <div className="container">
      <div className="row">
        <div className="welcome col-11">
          <h1>Welcome to your Icebox, {username}!</h1>
        </div>
        <div className="col-1"> <Link to="/logout">
          <button class="btn btn-danger disabled">Log Out</button>
        </Link> </div>
      </div>

      <div className="row">
        <div className="col-12 new-meal">
          <Link to="/newmeal">
            <button className="btn btn-success">Enter a new meal here!</button>
          </Link>
        </div>
      </div>

      <div className="row">
        {currentPost.map((post, index) => {
          let formatted = moment(post.date).format("MM/DD/YYYY");
          return (
            <div key={post._id} className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Meal: {post.mealName}</h5>
                  <br />
                  <p className="card-text">Servings left: {post.servings}</p>
                  <br />
                  <p className="card-text">Date cooked: {formatted}</p>
                  <div>
                    <Link to={`/edit/${post.mealName}/${post._id}`}>
                      <button className="btn btn-info btn-sm">Edit</button>
                    </Link>
                    <Link to={`/confirm/${post.mealName}/${post._id}`}>
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container mt-5">
        <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default Icebox;