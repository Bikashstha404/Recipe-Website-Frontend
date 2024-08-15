import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Brush your Teeth", completed: false },
  ]);

  const [task, setTask] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);

  const markAsComplete = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: true,
        };
      }
      return task;
    });

    setTasks(newTasks);
  };

  const handleSave = () =>{
    const newId = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;

    // setTasks((prevTasks)=>[
    //   ...prevTasks,
    //   {
    //     id: newId,
    //     name: task,
    //     completed: false,
    //   }
    // ]);

    const newTask = {
      id: tasks.length + 1,
      name: task,
      completd: false
    }
    setTasks([...tasks, newTask]);

    setTask("");
  }

  const handleDelete = (id) =>{
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks);
  }

  const handleEdit= (id)=> {
    setSelectedTask(id);
    const taskToEdit = tasks.find(task => task.id === id)
    setTask(taskToEdit.name);
  }

  const handleUpdate = () =>{
    const updatedTasks = tasks.map(t => {
      if(t.id === selectedTask){
        return {
          ...t,
          name: task
        }
      }
      return t
    })

    setTasks(updatedTasks)
    setTask("")
    setSelectedTask(null);
    console.log("hello")
  }

  const handleCancel = () => {
    setTask("")
    setSelectedTask(null);
  }
  return (
    <>
      <h1>To Do App</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      {
        selectedTask? (
          <>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleCancel}>Cancel</button>
          </>
        ) :
        (
          <button onClick={handleSave}>Save</button>
        )
      }

      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((task) => {
            return (
              <TodoItem
                key={task.id}
                task={task}
                onEdit = {handleEdit}
                onComplete={markAsComplete}
                onDelete={handleDelete}
              ></TodoItem>
            );
          })}
          {tasks.length === 0 && <div>No Tasks available</div>}
        </ul>
      </div>
    </>
  );
}

function TodoItem({ task, onComplete, onDelete, onEdit}) {
  return (
    <li>
      {task.completed ? (
        <span style={{ textDecoration: "line-through" }}>{task.id}. {task.name}</span>
      ) : (
        <span>{task.id}. {task.name}</span>
      )}
      {!task.completed && (
        <div>
          <button onClick={() => onComplete(task.id)}>Marks as complete</button>
        </div>
      )}
      <div>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={() => onEdit(task.id)}>Edit</button>
      </div>
    </li>
  );
}
export default Todo;
