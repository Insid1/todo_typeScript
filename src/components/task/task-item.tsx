import { ITaskItem } from 'interfaces/task';
import TrashCan from 'scss/img/trash-can.svg';
import styles from './task.module.scss';

interface TaskItemProps extends ITaskItem {
  toggleIsDone: (id: string) => void,
  removeTask: (id: string) => void,
}

function TaskItem({
  id, text, category = 'unselected',
  isDone = false, toggleIsDone, removeTask,
}:TaskItemProps) {
  return (
    <div className={styles['task-item']}>
      <input
        id={id}
        className={styles['task-item__check-button']}
        type="checkbox"
        checked={isDone}
      />
      <label htmlFor={id}>{text}</label>
      <div className={styles['task-item__category']}>{category}</div>
      <button
        type="button"
        className={styles['task-item__delete-button']}
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
