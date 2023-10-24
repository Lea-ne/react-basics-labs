import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import Task from './component/task';
import AddTaskForm from './component/Form';


function App() {

  const [ taskState, setTaskState ] = useState({
    tasks: []
  });


  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });


  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 




  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);
  }

  console.log(formState);






  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();
    
    tasks.push(form);
    setTaskState({tasks});
  }





  return (
    <div className="pack">
        <h1>Tasky</h1>

        <div className="name">
        {taskState.tasks.map((task, index) => (              
          <Task 
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            key={task.id}
            done={task.done}
            markDone={() => doneHandler(index)}
            deleteTask = {() => deleteHandler(index)}
          />
       ))}

      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />

      </div>

        
    </div>
  );
}

export default App;
