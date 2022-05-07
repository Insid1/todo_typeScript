import React from 'react';
import { selectFilteredTasks } from 'store/data/selectors';
import { useAppSelector } from 'store/hooks';
import TaskItem from './task-item';

function TasksList() {
  const tasks = useAppSelector(selectFilteredTasks);

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
            completed={task.completed}
          />
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
