import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState({ status: false, text: "" });

  const handleRemove = (id) => {
    const filteredData = tours.filter((tour) => tour.id !== id);
    setTours(filteredData);
  };

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      setIsError({
        status: true,
        text: `Somthing went wrong!
        Please refresh the page`,
      });
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (isError.status) {
    return (
      <main>
        <h2 className="title" style={{ color: "darkred" }}>
          {isError.text}
        </h2>
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <h2 className="title">No Tours Left</h2>
        <button className="btn" onClick={() => fetchData(url)}>
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} handleRemove={handleRemove} />
    </main>
  );
}

export default App;
