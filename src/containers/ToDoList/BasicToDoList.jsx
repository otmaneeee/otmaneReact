import React, { useState } from "react";
import "./BasicToDoList.css";
import CustomInput from "../../components/CustomInput";
import {
  textInputProps,
  bootstrapButtonVariant,
  buttonTexts,
} from "../../constants";
import CustomButton from "../../components/CustomButton";
const BasicToDoList = () => {
  const [task, setTask] = useState("");
  const [counter,setCounter] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const handleChange = (e) => {
      setTask(e.target.value);
  }
  const handleClick = () => {
      if(!task){
          alert("Add a task");
          return;
      }
      setTodoList([...todoList,{id:counter,text:task}]);
      setCounter(counter+1);
      setTask("");
  }
  return (
    <div>
      <h1 style={{textAlign:"center",color:"red"}}>To-do List</h1>
    <div className="todoContainer">
      <CustomInput
        placeholder={textInputProps.placeholder.toDoList}
        label={textInputProps.label.toDoList}
        onChange={handleChange}
        value = {task}
      />
      <CustomButton
        text={buttonTexts.toDoList}
        color={bootstrapButtonVariant.danger}
        onClick={handleClick}
      />
      <br></br>
      <br></br>
      <h1>Tasks</h1>
      <ul>
          {todoList.map((item) => <li>{item.id}-----{item.text}</li>)}
      </ul>
    </div>
    </div>
  );
};

export default BasicToDoList;
