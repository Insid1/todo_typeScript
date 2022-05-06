import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './data/reducer';
import interfaceSlice from './interface/reducer';

enum ReducerName {
  DATA = 'DATA',
  INTERFACE = 'INTERFACE',
}

const store = configureStore({
  reducer: {
    [ReducerName.DATA]: dataSlice,
    [ReducerName.INTERFACE]: interfaceSlice,
  },
});

export default store;
// Для правильной работы с хуками useSelector & useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
