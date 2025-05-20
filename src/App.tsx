import { useState } from 'react';
import './reset.css';
import './style.css';
import { Task } from './types/type';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { Sidebar } from './components/Sidebar';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTaskStatus = (index: number, completed: boolean) => {
    const updated = [...tasks];
    updated[index].completed = completed;
    setTasks(updated);
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const incompletedCount = tasks.length - completedCount;

  return (
    <div className="task_app">
      <header className="bg-primary p-3">
        <h1 className="fs-4 text-white fw-bold">タスク管理アプリ</h1>
      </header>
      <main className="page_main">
        <div className="page_wrap py-5">
          <div className="container">
            <div className="d-flex flex-column-reverse flex-md-row gap-3 gap-md-5">
              <div className="task_box w-100">
                <TaskForm onAdd={addTask} />
                <TaskList tasks={tasks} onStatusChange={updateTaskStatus} />
              </div>
              <Sidebar completed={completedCount} incompleted={incompletedCount}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
