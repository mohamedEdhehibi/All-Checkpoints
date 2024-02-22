import './App.css';
import Taskstab from './components/Tasks'   
import Todolist from './components/Todolist';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
function App() {
  const [tasks,setTasks]=useState(Taskstab)
  const taskdelete=(id)=>{
    setTasks(tasks.filter(ele=>ele.id!==id))
  }
  const taskdone=(id)=>{
    setTasks(tasks.map((ele) => ele.id === id ? { ...ele ,done:!ele.done}:ele))
  }
  const addtask=(task)=>{
    setTasks([...tasks, task])
  }
  return (
    <div className="App">
      <h1>Todo list</h1>
      <Todolist 
      todos={tasks} 
      handledelete={taskdelete}
      handledone={taskdone}
      />
      <AddTask addtask={addtask}/>
    </div>
  );
}

export default App;
