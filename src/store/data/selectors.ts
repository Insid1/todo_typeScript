import { createSelector } from '@reduxjs/toolkit';
import { selectCurrentFilter } from 'store/interface/selectors';
import { RootState } from 'store/store';
import { filterTasksByCategory } from 'util/task';

const selectTasks = (state : RootState) => state.DATA.tasks;

const selectFilteredTasks = createSelector([selectCurrentFilter, selectTasks], (filter, tasks) => {
  const filteredTasks = filterTasksByCategory(tasks, filter);
  return filteredTasks;
});

export { selectTasks, selectFilteredTasks };
