import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type { AppDispatch, RootState } from "01-app/providers/store/lib/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
