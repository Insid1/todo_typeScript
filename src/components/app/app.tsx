// import MainPage from '../pages/main-page';
import MainPage from 'components/pages/main-page';
import styles from './filter-list.module.scss';

function App() {
  return (
    <>
      <aside>
        <section className={styles['filter-list']}>
          <ul>
            <li>All</li>
            <li>Groceries</li>
            <li>Education</li>
            <li>Payments</li>
          </ul>
        </section>
      </aside>
      <MainPage />
    </>
  );
}

export default App;
