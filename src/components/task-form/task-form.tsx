import Category from 'components/categories/category';
import { ITask } from 'interfaces/task';
import { useState } from 'react';
import { addTask } from 'store/data/reducer';
import { useAppDispatch } from 'store/hooks';
import { Categories } from 'util/enum';
import styles from './task-form.module.scss';

function TaskForm() {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState(Categories.all);
  const dispatch = useAppDispatch();
  const newTask: ITask = {
    category: taskCategory,
    text: taskText,
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setTaskText(evt.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (evt.key === 'enter' || evt.key === 'Enter') {
      dispatch(addTask(newTask));
      setTaskText('');
    }
  };

  const handleClickAddBtn: React.MouseEventHandler<HTMLInputElement> = (evt) => {
    dispatch(addTask(newTask));
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
      <Category setActiveCategory={setTaskCategory} activeCategory={taskCategory} />
    </div>
  );
}

export default TaskForm;
