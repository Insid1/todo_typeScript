import { ITaskItem } from 'interfaces/task';
import TrashCan from 'scss/img/trash-can.svg';
import { removeTask, updateIsDone } from 'store/data/reducer';
import { useAppDispatch } from 'store/hooks';
import styles from './task.module.scss';

function TaskItem({
  id, text, category = 'unselected',
  isDone = false,
}:ITaskItem) {
  const dispatch = useAppDispatch();

  const handleToggleIsDone: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    updateIsDone(id);
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
        checked={isDone}
        onChange={handleToggleIsDone}
      />
      <label htmlFor={id}>{text}</label>
      <div className={styles['task-item__category']}>{category}</div>
      <button
        type="button"
        className={styles['task-item__delete-button']}
        onClick={handleClickDelete}
      >
        <img
          src={TrashCan}
          width={25}
          height="30px"
          alt=""
        />
      </button>
    </div>
  );
}

export default TaskItem;
