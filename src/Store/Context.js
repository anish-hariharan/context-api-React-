import React, { useState } from "react";

const Context = React.createContext({
  inputHandle: () => {},
  value: "",
  Input: () => {},
  value2: "",
});

export const ContextProvider = (props) => {
  const [value, setValue] = useState();
  const [value2, setTwo] = useState();

  const inputHandle = (event) => {
    setValue(event.target.value);
  };

  const Input = (event) => {
    setTwo(event.target.value);
  };

  return (
    <Context.Provider
      value={{
        inputHandle: inputHandle,
        value: value,
        Input: Input,
        value2: value2,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
