import React from "react";

const Item = ({ movie }) => {
  const { title, overview, poster_path } = movie;

  return (
    <div className="col-3">
      <div className="card my-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.substring(0, 22)}</h5>
          <p className="card-text">{overview.substring(0, 55)}...</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
