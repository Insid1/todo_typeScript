import { useSelector } from 'react-redux';
import { selectCurrentFilter } from 'store/interface/selectors';
import { Categories } from 'util/enum';
import FilterItem from './filter-item';
import styles from './filter-list.module.scss';

function Filter() {
  const currentFilter = useSelector(selectCurrentFilter);

  return (
    <section className={styles['filter-list']}>
      <ul>
        {Object.values(Categories).map((category) => (
          <li key={category}>
            <FilterItem
              currentFilter={currentFilter}
              category={category}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Filter;
