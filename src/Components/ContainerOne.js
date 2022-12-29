import React, { useContext } from "react";
import Context from "../Store/Context";
import Input from "../UI/Input";

const ContainerOne = () => {
  const ctx = useContext(Context);
  const show = ctx.inputHandle;

  return (
    <>
      <h1>{ctx.value}</h1>
      <input type="text" onChange={show} />
      <Input />
      <h1>{ctx.value2}</h1>
    </>
  );
};

export default ContainerOne;
