import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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
  const handlechange = (e) => {
    setAmount(e.target.value);
  };

  //handlechange on withdrawal made
  const handleWithdrawalChange = (e) => {
    setWithdrawAmount(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        balance,
        amount,
        withdrawAmount,
        handleClick,
        handlechange,
        handleWithdrawClick,
        handleWithdrawalChange,
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
