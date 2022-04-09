import React from "react";
import Tour from "./Tour";
function Tours({ tours, handleRemove }) {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} handleRemove={handleRemove} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
