import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { ITaskItem } from 'interfaces/task';

interface IDataState {
  tasks: ITaskItem[]
}

const initialState: IDataState = {
  tasks: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.tasks.push({
        id: nanoid(3),
        text: action.payload,
        category: 'none',
        isDone: false,
      });
    },
    removeTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateIsDone(state, action: PayloadAction<string>) {
      const updatedTask = state.tasks.find(
        (task) => task.id === action.payload,
      );
      if (updatedTask) {
        updatedTask.isDone = !updatedTask.isDone;
      }
    },
  },
});

export const { addTask, removeTask, updateIsDone } = dataSlice.actions;
export default dataSlice.reducer;
