import { ITaskItem } from 'interfaces/task';
import { memo } from 'react';
import TrashCan from 'scss/img/trash-can.svg';
import { removeTask, updateIsDone } from 'store/data/reducer';
import { useAppDispatch } from 'store/hooks';
import styles from './task.module.scss';

function TaskItem({
  id, text, category,
  completed,
}:ITaskItem) {
  const dispatch = useAppDispatch();

  const handleToggleIsDone: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(updateIsDone(id));
  };

  const handleClickDelete:React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    dispatch(removeTask(id));
  };

  return (
    <div className={styles['task-item']}>
      <input
        id={id}
        className={styles['task-item__check-button']}
        type="checkbox"
        checked={completed}
        onChange={handleToggleIsDone}
      />
      <label htmlFor={id}>{text}</label>
      <div className={`
      ${styles['task-item__category']}
      ${styles[`task-item__${category}`]}
      `}
      >
        {category}

      </div>
      <button
        type="button"
        className={styles['task-item__delete-button']}
        onClick={handleClickDelete}
      >
        <img
          src={TrashCan}
          width={25}
          height="30px"
          alt="trash-can"
        />
      </button>
    </div>
  );
}

export default memo(TaskItem);
