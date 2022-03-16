import React, { useState, useContext, useEffect } from "react";
import validation from "./validation";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialValues = { name: "", email: "", password: "" };
  const [values, setValues] = useState({ initialValues });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  //up is new
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  //handleClick
  const handleClick = (e) => {
    e.preventDefault();

    //increment the amount of deposit made
    setBalance(parseInt(balance) + parseInt(amount));
    setAmount("");
  };

  const handleWithdrawClick = (e) => {
    e.preventDefault();

    //reduces deposit amount for withdrawak
    setBalance(parseInt(balance) - parseInt(withdrawAmount));
    setWithdrawAmount("");
  };

  //handlechange on deposit made
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  //handlechange on withdrawal made
  const handleWithdrawalChange = (e) => {
    setWithdrawAmount(e.target.value);
  };

  //handle submission of form
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  //handle input changes
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const getFormValues = () => {
    const storedValues = localStorage.getItem("form");
    // console.log("IN GET FORM VALUES");
    // console.log(storedValues);
    if (!storedValues)
      return {
        email: "",
        password: "",
      };

    return JSON.parse(storedValues);
  };

  return (
    <AppContext.Provider
      value={{
        balance,
        amount,
        withdrawAmount,
        handleClick,
        handleChange,
        handleWithdrawClick,
        handleWithdrawalChange,
        values,
        handleSubmit,
        handleInputChange,
        dataIsCorrect,
        errors,
        getFormValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
