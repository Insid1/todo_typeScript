import React from 'react';
import { ITaskItem } from 'interfaces/task';
import TaskItem from './task-item';

interface TasksListProps {
  tasks: ITaskItem[],
  toggleIsDone: (id: string) => void,
  removeTask: (id: string) => void,
}

function TasksList({ tasks, toggleIsDone, removeTask } :TasksListProps) {
  return (
    <ul>
      {tasks.map((task):React.ReactNode => (
        <li key={task.id}>
          <TaskItem
            id={task.id}
            text={task.text}
            category={task.category}
            isDone={task.isDone}
            toggleIsDone={toggleIsDone}
            removeTask={removeTask}
          />
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
