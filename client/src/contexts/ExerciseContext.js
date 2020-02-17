import React, { createContext, useState } from "react";

export const ExerciseContext = createContext();

const ExerciseContextProvider = props => {
  const initialState = {
    exercises: [
      {
        id: 1,
        username: "john smith",
        duration: 50,
        description: "the cow jumped over the moon",
        date: "june 12 1968"
      },
      {
        id: 2,
        username: "mick mars",
        duration: 50,
        description: "the crue",
        date: "june 12 1968"
      },
      {
        id: 3,
        username: "nikki sixx",
        duration: 50,
        description: "the motley",
        date: "june 12 1968"
      }
    ]
  };
  const [exercises, setExercises] = useState(initialState);
  console.log(exercises);
  return (
    <ExerciseContext.Provider value={exercises}>
      {props.children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContextProvider;
