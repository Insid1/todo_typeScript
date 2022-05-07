import { useAppDispatch } from 'store/hooks';
import { setFilterType } from 'store/interface/reducer';
import { Categories } from 'util/enum';
import styles from './filter-list.module.scss';

interface FilterItemProps {
  currentFilter: Categories,
  category: Categories
}

function FilterItem({ currentFilter, category }: FilterItemProps) {
  const dispatch = useAppDispatch();
  const handleFilterClick:React.MouseEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setFilterType(category));
  };
  return (
    <input
      type="button"
      className={`
            ${styles['filter-item']}
            ${currentFilter === category ? styles['filter-item__active'] : ''}
            `}
      key={category}
      onClick={handleFilterClick}
      value={category}
    />
  );
}

export default FilterItem;
