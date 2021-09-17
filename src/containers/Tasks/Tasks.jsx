import { useSelector } from "react-redux";
const Tasks = () => {
  const dataFromStore = useSelector(state=>state.tasksState.taskList);
  const list = new Array(20).fill().map((item,index)=> `TASK_${index}`);
  return (
    <div>
      <h1> Tasks</h1>
      {list.map((item,index) => (
        <li key={index} >{item}</li>
      ))}
      <h1>My todo list for today</h1>
      {dataFromStore.map((item,index)=> <li key={index}>{item.text}</li>)}
    </div>
  );
};

export default Tasks;
