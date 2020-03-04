import React, { createContext, useState } from "react";
import axios from "axios";

export const MapsContext = createContext();

const MapsContextProvider = props => {
  const [pinEntries, setPinEntries] = useState([]);

  const getPinEntries = async () => {
    try {
      const res = await axios
        .get("http://localhost:4000/maplogentry")
        .then(res => setPinEntries(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const addPinEntry = async pinEntry => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios
        .post("http://localhost:4000/maplogentry", pinEntry, config)
        .then(res => setPinEntries([...pinEntries, res.data]));
    } catch (err) {
      console.log(err);
    }
  };

  //   const deleteExercises = async id => {
  //     try {
  //       const res = await axios
  //         .delete(`http://localhost:4000/exercises/${id}`)
  //         .then(setExercises(exercises.filter(exercise => exercise._id !== id)));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const updateExercises = async exercise => {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     };

  //     try {
  //       const res = await axios
  //         .patch(
  //           `http://localhost:4000/exercises/${exercise._id}`,
  //           exercise,
  //           config
  //         )
  //         .then(res => res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const getCurrent = exercise => {
  //     return setCurrent(exercise);
  //   };

  //   const clearCurrent = () => {
  //     return setCurrent(null);
  //   };

  return (
    <MapsContext.Provider
      value={{
        pinEntries,
        getPinEntries,
        addPinEntry
      }}
    >
      {props.children}
    </MapsContext.Provider>
  );
};

export default MapsContextProvider;
