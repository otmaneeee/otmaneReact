import { useSelector } from "react-redux";

const Tasks = () => {
  const dataFromStore = useSelector(state => state.tasksState.taskList);
  const list = new Array(20).fill().map((item,index)=> `TASK_${index}`);
  return (
    <div>
      <h1>Tasks</h1>
      {list.map((item,index) => (
        <li key={index} >{item}</li>
      ))}
      <br></br>
      <br></br>
      <section style={{backgroundColor:"red",color:"white"}}>
          <h1>Hello World</h1>
          {dataFromStore.map((item)=><li>{item}</li>)}
      </section>
    </div>
  );
};

export default Tasks;
