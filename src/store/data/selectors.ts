import { RootState } from 'store/store';

const selectTasks = (state : RootState) => state.DATA.tasks;

// eslint-disable-next-line import/prefer-default-export
export { selectTasks };
