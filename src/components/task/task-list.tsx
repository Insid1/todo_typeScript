import React from 'react';
import { useAppSelector } from 'store/hooks';
import TaskItem from './task-item';

function TasksList() {
  const tasks = useAppSelector((state) => state.DATA.tasks);

  if (tasks.length === 0) {
    return <p>Add your first task!</p>;
  }

  return (
    <ul>
      {tasks.map((task):React.ReactNode => (
        <li key={task.id}>
          <TaskItem
            id={task.id}
            text={task.text}
            category={task.category}
            isDone={task.isDone}
          />
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
