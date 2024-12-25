import React from "react";

function Mov({el}) {
  return (
    <div className="card" key={el.imdbID}>
      <img src={el.Poster} alt="" />
      <h3>{el.Title}</h3>
    </div>
  );
}

export default Mov;
