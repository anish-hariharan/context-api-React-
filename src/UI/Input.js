import React, { useContext } from "react";
import Context from "../Store/Context";

const Input = () => {
  const ctx = useContext(Context);

  return (
    <>
      <input onChange={ctx.Input}></input>
    </>
  );
};

export default Input;
