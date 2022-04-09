import React from "react";
import Tour from "./Tour";

function Tours({ tours, handleRemove }) {
  return (
    <article className="single-tour">
      <h2 className="title">Our Tours</h2>
      <div className="undeline"></div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} handleRemove={handleRemove} />;
      })}
    </article>
  );
}

export default Tours;
