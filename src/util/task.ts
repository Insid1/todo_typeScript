import { ITaskItem } from 'interfaces/task';
import { Categories } from './enum';

const filterTasksByCategory = (tasks: ITaskItem[], category: Categories): Array<ITaskItem> => {
  if (category === Categories.all) {
    return tasks;
  }
  return tasks.filter((task) => task.category === category);
};

// eslint-disable-next-line import/prefer-default-export
export { filterTasksByCategory };
