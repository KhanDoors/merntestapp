import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ExerciseContext } from "../../contexts/ExerciseContext";

const Home = () => {
  const { exercises } = useContext(ExerciseContext);
  return (
    <div>
      <h1>Home</h1>
      <Link to="/exercises">
        <button>Exercises</button>
      </Link>
      <p>{exercises.length}</p>
    </div>
  );
};

export default Home;
