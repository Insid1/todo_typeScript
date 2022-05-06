import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from './store';
// типизированный хук для dispatch
const useAppDispatch = () => useDispatch<AppDispatch>();
// типизированный хук для useSelector
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
