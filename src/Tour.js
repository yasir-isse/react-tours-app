import React, { useState } from "react";

function Tour({ id, image, name, price, info, handleRemove }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <section>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => handleRemove(id)}>
          Not Interested
        </button>
      </footer>
    </section>
  );
}

export default Tour;
