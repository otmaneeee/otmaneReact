const ReadTodo = () => {
  const list = ["task1", "task2", "task3", "task4"];
  return (
    <div>
      <h1>Tasks</h1>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

export default ReadTodo;
