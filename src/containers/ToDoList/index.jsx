import CustomInput from "../../components/CustomInput";
import React,{useState} from "react";
import CustomButton from "../../components/CustomButton";
import {  toDoList ,buttonTexts, bootstrapButtonVariant } from "../../constants";
import "./index.css";
const ToDo = () => {
    const [step,setStep] = useState([]);
  const handleChange = (e) => {
    setStep(e.target.value);
  };
  const handleClick = (e) => {
     const list = {
       
     }
  }
  const inputProps = {
    ...toDoList,
    onChange: handleChange,
  };
  return (
    <div className="othmane">
      <CustomInput {...inputProps} />
      <CustomButton
        color={bootstrapButtonVariant.danger}
        text={buttonTexts.add}
        onClick={handleClick}
      />
      <h2 className="title">To-Do List</h2>
      <div className="todo">
        <ul>
          <li>{step}</li>
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
