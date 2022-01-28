import { useState } from "react";
import "./styles/App.css";
import { Input, Button, Task } from "./components";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChangeInput = (event) => {
    const inputTask = event.target.value;

    setTask(inputTask);
  };

  const handleAddTask = (event) => {
    event.preventDefault();

    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="todoWrapper">
      <form onSubmit={handleAddTask}>
        <h1>Lista de Tarefas</h1>
        <Input
          placeholder="Informe sua tarefa"
          onChange={(e) => handleChangeInput(e)}
          value={task}
        />
        <Button title="Salvar Tarefa" type="submit" />
      </form>

      <ul className="todoWrapper__tasks">
        {tasks.map((item, index) => (
          <Task key={index} title={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;
