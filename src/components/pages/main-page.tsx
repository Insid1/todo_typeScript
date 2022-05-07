import TasksList from 'components/task/task-list';
import TaskForm from 'components/task-form/task-form';
import styles from './tasks.module.scss';

function MainPage() {
  return (
    <div className={styles.tasks}>
      <TaskForm />
      <TasksList />

    </div>
  );
}

export default MainPage;
