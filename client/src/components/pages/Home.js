import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/exercises">
        <button>Exercises</button>
      </Link>
    </div>
  );
};

export default Home;
