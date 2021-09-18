import React, { useEffect, useState } from "react";
import "./BasicToDoList.css";
import CustomInput from "../../components/CustomInput";
import {
  textInputProps,
  bootstrapButtonVariant,
  buttonTexts,
} from "../../constants";
import CustomButton from "../../components/CustomButton";
import { addTask , removeTask,pushTask } from "./action";
import { useDispatch , useSelector} from "react-redux";
import { listMission } from "./constants";

const BasicToDoList = () => {
  const [task, setTask] = useState("");
  const [counter,setCounter] = useState(0);
  const dispatch = useDispatch();
  const todoList = useSelector((state)=>state.tasksState.taskList);
  useEffect(()=>{
    dispatch(pushTask(listMission))
  },[]);
  const handleChange = (e) => {
      setTask(e.target.value);
  }
  const handleClick = () => {
      if(!task){
          alert("Add a task");
          return;
      }
      // setTodoList([...todoList,{id:counter,text:task}]);
      dispatch(addTask({id:counter,text:task}));
      setCounter(counter+1);
      setTask("");
  }
   const deleteLastElement = () =>{
     dispatch(removeTask());
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
      <CustomButton
        text={buttonTexts.delete}
        color={bootstrapButtonVariant.outlineWarning}
         onClick={deleteLastElement}
      />
      <br></br>
      <br></br>
      <h1>Tasks</h1>
      <ul>
          {todoList.map((item) => (
            <div>
              <li>{item.id} ----- {item.text}</li>
               <CustomButton color={bootstrapButtonVariant.success} text={"✓"} />
            </div>
          ))}
      </ul>
    </div>
    </div>
  );
};

export default BasicToDoList;
