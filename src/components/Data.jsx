import React from "react";
import CreateAccount from "./createAccount";
import { useGlobalContext } from "./context";

const Data = () => {
  // const { values } = useGlobalContext();
  // console.log(values);
  // return (
  //   <div style={{ marginTop: "5rem" }}>
  //     <h3 style={{ color: "black", textAlign: "center" }}>All Data</h3>
  //     {JSON.stringify(values.initialValues)}
  //   </div>
  // );
  const { getFormValues } = useGlobalContext();
  // console.log("IN ALL DATA");
  console.log(getFormValues);
  return (
    <div>
      <h3 style={{ color: "black" }}>All Data</h3>
      {JSON.stringify(getFormValues)}
    </div>
  );
};

export default Data;
