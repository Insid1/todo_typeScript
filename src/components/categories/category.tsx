import { memo } from 'react';
import { Categories } from 'util/enum';
import CategoryItem from './category-item';
import styles from './category.module.scss';

interface CategoryProps {
  activeCategory: Categories,
  setActiveCategory: React.Dispatch<React.SetStateAction<Categories>>
}

function Category({ activeCategory, setActiveCategory }: CategoryProps) {
  return (
    <div className={styles.category}>
      {Object.values(Categories).map((category) => (
        <CategoryItem
          key={category}
          name={category}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          labelClass={`
          ${styles.category__label}
          ${styles[`category__${category}`]}
          `}
        />
      ))}
    </div>
  );
}

export default memo(Category);
