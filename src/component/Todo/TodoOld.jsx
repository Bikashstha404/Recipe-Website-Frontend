import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Brush your Teeth", completed: false },
    // {id:2, name: "Drink Hot Water", completed: false},
    // {id:3, name: "Get Ready for school", completed: false}
  ]);

  const [taskName, setTaskName] = useState("");

  const markAsComplete = (id) => {
    const newTasks = tasks.map(task => {
      if(task.id === id){
        return {
          ...task,
          completed: true
        }
      }
    })

    setTasks(newTasks);
  }
  const handleAddTask = () => {
    // if (taskName.trim() === '') {
    //     return;
    // }
    setTasks((tasks) => [
      {
        id: tasks.length + 1,
        name: { taskName },
        completed: false,
      },
    ]);
    setTaskName("");
  };
  return (
    <>
      <h1>To Do App</h1>
      <div>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>Save</button>
      </div>
      <div>
        <h2>Tasks</h2>
        <ul>
          {
            tasks.map((task) => {
              // if no id then we can use task.map((task, index)) key = {index}
              return (
                // <li key={task.id}>
                //   {task.name}
                //   <div>
                //     <button>Marks as completed</button>
                //   </div>
                // </li>

                <TodoItem key={task.id} task={task} onComplete={markAsComplete}></TodoItem>
              );
            })

            // tasks.map((task, index) => {
            //     return (
            //         <li key = {index}>{task.name}</li>
            //     )
            // })
          }
          {tasks.length === 0 && <div>No Tasks available</div>}
        </ul>
      </div>
    </>
  );
}

function TodoItem({task, onComplete}) {
  return (
    <li>
      {/* {task.name}
      <div>
        <button onClick={onComplete(task.id)}>Marks as completed</button>
      </div> */}

      {
        task.completed ?
        <span style = {{textDecoration: "line-trhough"}}>{task.name}</span> : task.name
      }
      !task.completed && <div>
        <button onClick={() => onComplete(task.id)}>Marks as complete</button>
      </div>
    </li>
  );
}
export default Todo;
