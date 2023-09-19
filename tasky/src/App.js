import './App.css';
import Task from './component/task';

function App() {
  return (
    <div className="App">
      <h1>HFLSKJDFLSKJDF</h1>

      <div class="pack">
        <Task title="Dishes" deadline="Today" description="sldfjsldkjf"/>
        <Task title="Laundry" deadline="Tomorrow"  description="sldfjsldkjf"/>
        <Task title="Tidy" deadline="Today"  description="sldfjsldkjf"/>
      </div>
    </div>
  );
}

export default App;
