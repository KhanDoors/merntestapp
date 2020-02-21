import React, { createContext, useState } from "react";

export const ExerciseContext = createContext();

const ExerciseContextProvider = props => {
  const initialState = {
    exercises: [
      {
        id: 1,
        name: "benchpress",
        url: "https://ak1.picdn.net/shutterstock/videos/33735811/thumb/1.jpg",
        duration: 50,
        description:
          "The bench press builds the muscles of the chest as well as the triceps of the back of the arms and the front deltoid shoulder muscles. You can do this exercise with barbells, dumbbells, or with a Smith machine, which constrains the path of the barbell and makes the exercise a little easier. You will often learn the bench press in a strength training program. Beginners should try lifts without weight on the bar to warm up, get a feel for the bar, and learn to do it with good form. You can use it regularly as part of an upper body workout for strength and muscle development.",
        date: "june 12 1968"
      },
      {
        id: 2,
        name: "Biceps Curls",
        url:
          "https://www.darkironfitness.com/wp-content/uploads/2018/03/Standing-Dumbbell-Hammer-Curls-250x242.png",
        duration: 50,
        description:
          "The biceps curl is a highly recognizable weight-training exercise that works the muscles of the upper arm, and to a lesser extent, those of the lower arm. It's a great exercise for seeing results in strength and definition. There are several variations of this exercise, including those using dumbbells, kettlebells, barbells, or cable machines. Start with the standing alternating dumbbell biceps curl, which you can do anywhere. Curls are a typical exercise used in upper body strength exercise routines.",
        date: "june 12 1968"
      },
      {
        id: 3,
        name: "Squats",
        url: "https://www.gymvisual.com/1613-large_default/3-4-sit-up.jpg",
        duration: 50,
        description:
          "The squat lift exercise is arguably one of the best overall weightlifting exercises for building lower body and leg power and strength. Because this is a compound exercise that engages multiple muscles and joints at once, it takes some instruction and practice to master safely.1﻿ If just beginning, work with a trainer to learn proper technique. You can use the squat as part of a strength workout, especially for the lower body.",
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
