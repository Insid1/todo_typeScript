import { Categories } from 'util/enum';

interface CategoryItemProps {
  name: Categories,
  labelClass: string,
  activeCategory:Categories,
  setActiveCategory: React.Dispatch<React.SetStateAction<Categories>>
}

function CategoryItem({
  name, labelClass, activeCategory, setActiveCategory,
}: CategoryItemProps) {
  const handleChange = () => {
    setActiveCategory(name);
  };

  return (
    <>
      <input
        onChange={handleChange}
        type="radio"
        id={name}
        checked={name === activeCategory}
      />
      <label
        className={labelClass}
        htmlFor={name}
      >
        {name}

      </label>
    </>
  );
}

export default CategoryItem;
