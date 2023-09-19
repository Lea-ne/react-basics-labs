import { useState } from 'react';
import './App.css';
import Task from './component/task';

function App() {

  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", deadline: "Today" },
      { id: 4, title: "sdfjskldjfs", deadline: "Today" },
      { id: 5, title: "sdfskld", deadline: "6mercred" },
    ]
  });

  return (
    <div className="pack">
        <h1>Tasky</h1>
        <div className="name">
        {taskState.tasks.map((task) => (              
          <Task 
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            key={task.id}
          />
  ))} 
        </div>
    </div>
  );
}

export default App;
