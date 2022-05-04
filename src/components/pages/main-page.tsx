import TrashCan from 'scss/img/trash-can.svg';
import styles from './tasks.module.scss';

function MainPage() {
  return (
    <div className={styles.tasks}>
      <h1>All Tasks</h1>
      <input
        className={styles['tasks__task-name']}
        placeholder='Add a new task inside "All" category'
      />
      <ul>
        <li>
          <div className={styles['task-item']}>
            <input
              id='321'
              className={styles['task-item__check-button']}
              type='checkbox'
            />
            <label htmlFor='321'>Get a new helmet</label>
            <div className={styles['task-item__category']}>Uncategorized</div>
            <button className={styles['task-item__delete-button']}>
              <img src={TrashCan} width={25} height='30px' alt='' />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MainPage;
