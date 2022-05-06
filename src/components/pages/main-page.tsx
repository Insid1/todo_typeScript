import TasksList from 'components/task/task-list';
import { nanoid } from 'nanoid';
import { ITaskItem } from 'interfaces/task';
import { getRandomValueFromArr } from 'util/common';
import { useState } from 'react';
import TaskForm from 'components/task-form/task-form';
import styles from './tasks.module.scss';

enum CATEGORIES {
  UNSELECTED = 'UNSELECTED',
  GROCERIES = 'GROCERIES',
  EDUCATION = 'EDUCATION',
  PAYMENT = 'PAYMENT',
}

function MainPage() {
  const [tasks, setTasks] = useState<ITaskItem[]>([]);

  const addTask = (text: string): void => {
    if (text.length === 0) {
      return;
    }
    const newTask:
    ITaskItem = {
      id: nanoid(3),
      text,
      category: getRandomValueFromArr<string>(Object.values(CATEGORIES)),
    };
    setTasks((prevState) => [...prevState, newTask]);
  };
  const toggleIsDone = (id: string): void => {
    setTasks((prevTasks) => prevTasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }
      return task;
    }));
  };
  const removeTask = (id: string): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => id !== task.id));
  };

  return (
    <div className={styles.tasks}>
      <TaskForm />
      {tasks && (
      <TasksList />
      )}

    </div>
  );
}

export default MainPage;
