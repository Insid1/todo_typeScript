import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categories } from 'util/enum';

interface IInterfaceState {
  sortingType: string,
  filterType: Categories,
}

const initialState: IInterfaceState = {
  sortingType: 'none',
  filterType: Categories.all,
};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    setSortingType(state, action: PayloadAction<string>) {
      state.sortingType = action.payload;
    },
    setFilterType(state, action: PayloadAction<Categories>) {
      state.filterType = action.payload;
    },
  },
});

export const { setSortingType, setFilterType } = interfaceSlice.actions;
export default interfaceSlice.reducer;
