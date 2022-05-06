import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInterfaceState {
  sortingType: string,
  filterType: string,
}

const initialState: IInterfaceState = {
  sortingType: 'none',
  filterType: 'all',
};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    setSortingType(state, action: PayloadAction<string>) {
      state.sortingType = action.payload;
    },
    setFilterType(state, action: PayloadAction<string>) {
      state.filterType = action.payload;
    },
  },
});

export const { setSortingType, setFilterType } = interfaceSlice.actions;
export default interfaceSlice.reducer;
