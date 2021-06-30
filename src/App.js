import {useState, useReducer} from 'react';
import Result from './components/Result';
import AddTask from './components/AddTask';
import MoreTasks from './components/MoreTasks';
import 'bootstrap/dist/css/bootstrap.min.css'




function reducer(state, action) {
  console.log(action.type)
  switch(action.type) {
    case 'setTask': return {...state, task: action.task}
    default: return state
  }
}
function App() {

  // const [task, setTask] = useState(['saman'])

  const [state, dipatch] = useReducer(reducer, {
    task: []
  } )

  function a(task) {
    dipatch({
      type: 'setTask',
      task: task
    })
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <Result task={state.task} />
        </div>
        <div className="card-body">
          <AddTask task={state.task} setTask={a} />
        </div>
        <div className="card-footer">
          <MoreTasks task={state.task} />
        </div>
      </div>
    </div>
  );
}

export default App;
