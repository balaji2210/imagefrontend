import React from "react";
import { useState } from "react";
import { imageUpload } from "../auth";
import { useHistory } from "react-router-dom";

function Upload() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("token"));

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("photo", photo);
    imageUpload(formData, token).then((data) => {
      history.push("/mypost");
    });
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 offset-lg-3">
            <h4 className="text-center text-primary">Upload</h4>
            <div className="card p-3 shadow">
              <div className="mb-3">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <input
                className="form-control form-control-lg"
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              <div className="m-3">
                <button className="btn btn-primary form-control">upload</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Upload;
