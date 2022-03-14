import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchPost } from "../auth";

function MyPost() {
  const [posts, setPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    fetchPost(user._id, token).then((data) => {
      setPosts(data.posts);
      console.log(data);
    });
  }, []);

  return (
    <div>
      {posts.length ? (
        <div className="row m-3">
          {posts.map((post, i) => (
            <div key={i} className="col-md-3 m-md-4 mt-3">
              <div className="card">
                <img
                  src={post.photo.secure_url}
                  className="card-img-top"
                  alt="image"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{post.title}</h5>
                  <p className="card-text text-center">{post.description}</p>
                  <div className="row">
                    <Link to={`/post/${post._id}`} className="btn btn-primary ">
                      GoToPost
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h4 className="text-center mt-5">No Posts Yet...</h4>
        </div>
      )}
    </div>
  );
}

export default MyPost;
