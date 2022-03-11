import React, { useState } from "react";
import CreateAccount from "./createAccount";
import SignupFormSuccess from "./SignupFormSuccess";

const Form = ({name}) => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true)
  }

  const namee = 'kess'

  return (
    <div>
      {!formIsSubmitted ? (
        <CreateAccount submitForm={submitForm} />
      ) : (
        <SignupFormSuccess name={namee} />
      )}
    </div>
  );
};

export default Form;
