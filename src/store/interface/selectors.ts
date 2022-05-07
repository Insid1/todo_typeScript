import { RootState } from 'store/store';

const selectCurrentFilter = (state: RootState) => state.INTERFACE.filterType;

const selectCurrentSorting = (state: RootState) => state.INTERFACE.sortingType;

export { selectCurrentFilter, selectCurrentSorting };
