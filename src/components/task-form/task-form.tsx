import { useState } from 'react';
import styles from './task-form.module.scss';

interface TaskFormProps {
  addTask: (text: string) => void,
}

function TaskForm({ addTask } :TaskFormProps) {
  const [taskText, setTaskText] = useState('');

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setTaskText(evt.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if ((evt.key === 'enter' || evt.key === 'Enter') && taskText.length !== 0) {
      addTask(taskText);
      setTaskText('');
    }
  };

  const handleClickAddBtn: React.MouseEventHandler<HTMLInputElement> = (evt) => {
    addTask(taskText);
    setTaskText('');
  };

  return (
    <div className={styles['task-form']}>
      <h1>All Tasks</h1>
      <div className={styles['task-form__container']}>
        <input
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={styles['task-form__task-name']}
          placeholder='Add a new task inside "All" category'
          value={taskText}
        />
        <input
          className={styles['task-form__add-button']}
          type="button"
          value="Add"
          onClick={handleClickAddBtn}
        />
      </div>
    </div>
  );
}

export default TaskForm;
