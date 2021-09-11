import CustomButton from "../../components/CustomButton";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import { PARAGRAPH_TO_TYPE } from "../../constants";
import { stringCompare , stringsCharDiff } from "../../utils/stringUtils";
const Categorie = () => {
  const [counter, setCounter] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    setCounter(stringsCharDiff(e.target.value,PARAGRAPH_TO_TYPE));
  };
  return (
    <div>
      <h1>Please type : {PARAGRAPH_TO_TYPE}</h1>
      <CustomInput onChange={handleChange} />
      <h2>You type : {name}</h2>
      <h2>Wrong letters : {counter}</h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
};

export default Categorie;
