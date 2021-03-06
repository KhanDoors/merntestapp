import React, { createContext, useState } from "react";
import axios from "axios";

export const ExerciseContext = createContext();

const ExerciseContextProvider = props => {
  const [exercises, setExercises] = useState([]);
  const [current, setCurrent] = useState(null);

  const getExercises = async () => {
    try {
      const res = await axios
        .get("http://localhost:4000/exercises")
        .then(res => setExercises(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const addExercises = async exercise => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios
        .post("http://localhost:4000/exercises", exercise, config)
        .then(res => setExercises([...exercises, res.data]));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteExercises = async id => {
    try {
      const res = await axios
        .delete(`http://localhost:4000/exercises/${id}`)
        .then(setExercises(exercises.filter(exercise => exercise._id !== id)));
    } catch (err) {
      console.log(err);
    }
  };

  const updateExercises = async exercise => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios
        .patch(
          `http://localhost:4000/exercises/${exercise._id}`,
          exercise,
          config
        )
        .then(res =>
          setExercises(
            exercises.map(exercise =>
              exercise._id === res.data._id ? res.data : exercise
            )
          )
        );
    } catch (err) {
      console.log(err);
    }
  };

  const getCurrent = exercise => {
    return setCurrent(exercise);
  };

  const clearCurrent = () => {
    return setCurrent(null);
  };

  return (
    <ExerciseContext.Provider
      value={{
        exercises,
        getExercises,
        addExercises,
        deleteExercises,
        current,
        getCurrent,
        clearCurrent,
        updateExercises
      }}
    >
      {props.children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContextProvider;
