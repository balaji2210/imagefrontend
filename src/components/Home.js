import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { allPost } from "../auth";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    allPost().then((data) => {
      console.log(data);
      setPost(data.posts);
    });
  }, []);

  return (
    <div>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
