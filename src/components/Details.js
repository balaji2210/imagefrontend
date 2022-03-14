import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteAPost, getPost, updatePost } from "../auth";

function Details() {
  const { id } = useParams();

  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("token"));

  const handelSubmit = (e) => {
    e.preventDefault();
    updatePost({ title, description }, id, token).then((data) => {
      console.log(data);
      history.push("/");
    });
  };

  const deletePost = () => {
    deleteAPost(id, token).then((data) => {
      console.log(data);
      history.push("/");
    });
  };

  useEffect(() => {
    getPost(id, token).then((data) => {
      setPost(data.post);
      console.log(data.post);
    });
  }, [id]);
  return (
    <div className="row mt-3">
      <div className="col-md-4 offset-md-4">
        <img
          src={post ? post.photo.secure_url : "Loading...."}
          className="img-thumbnail"
          alt="profile"
        ></img>
      </div>
      <div className="text-center">
        <h4>{post.title}</h4>
        <h5>{post.description}</h5>
        <div
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-warning text-white col-md-2 m-5"
        >
          update
        </div>
        <div className="btn btn-danger col-md-2 m-5" onClick={deletePost}>
          delete
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="col-form-label">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label">Description:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    value={description}
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handelSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
