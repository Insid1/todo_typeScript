import TasksList from 'components/task/task-list';
import { nanoid } from 'nanoid';
import { ITaskItem } from 'interfaces/task';
import { getRandomValueFromArr } from 'util/common';
import { useState } from 'react';
import styles from './tasks.module.scss';

enum CATEGORIES {
  UNSELECTED = 'UNSELECTED',
  GROCERIES = 'GROCERIES',
  EDUCATION = 'EDUCATION',
  PAYMENT = 'PAYMENT',
}

const mockTasks: ITaskItem[] = [
  {
    id: nanoid(3),
    text: 'sometext1',
    category: getRandomValueFromArr<string>(Object.values(CATEGORIES)),
  },
  {
    id: nanoid(3),
    text: 'sometext2',
    category: getRandomValueFromArr<string>(Object.values(CATEGORIES)),
    isDone: true,
  },
  {
    id: nanoid(3),
    text: 'sometext3',
    category: getRandomValueFromArr<string>(Object.values(CATEGORIES)),
  },
  {
    id: nanoid(3),
    text: 'sometext4',
    category: getRandomValueFromArr<string>(Object.values(CATEGORIES)),
  },
];

function MainPage() {
  const [tasks, setTasks] = useState<ITaskItem[]>(mockTasks);
  const [taskText, setTaskText] = useState('');

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (evt.key === 'enter' || evt.key === 'Enter') {
      addTask();
    }
  };
  const addTask = (): void => {
    const newTask:
    ITaskItem = {
      id: nanoid(3),
      text: taskText,
      category: getRandomValueFromArr<string>(Object.values(CATEGORIES)),
    };
    setTasks((prevState) => [...prevState, newTask]);
    setTaskText('');
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
  const handleInputChange:
  React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setTaskText(evt.target.value);
  };
  // const handleCheckBoxChange = ()

  return (
    <div className={styles.tasks}>
      <h1>All Tasks</h1>
      <input
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={styles['tasks__task-name']}
        placeholder='Add a new task inside "All" category'
        value={taskText}
      />
      {tasks && (
      <TasksList
        tasks={tasks}
        toggleIsDone={toggleIsDone}
        removeTask={removeTask}
      />
      )}

    </div>
  );
}

export default MainPage;
