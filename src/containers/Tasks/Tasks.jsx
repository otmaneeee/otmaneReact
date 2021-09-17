const Tasks = () => {
  const list = new Array(20).fill().map((item,index)=> `TASK_${index}`);
  return (
    <div>
      <h1>Tasks</h1>
      {list.map((item,index) => (
        <li key={index} >{item}</li>
      ))}
    </div>
  );
};

export default Tasks;
