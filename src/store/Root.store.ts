import { configureStore } from "@reduxjs/toolkit";
import {
    TypedUseSelectorHook,
    useDispatch as useUntypedDispatch, 
    useSelector as useUntypedSelector
} from 'react-redux'


const RootStore = configureStore({
    reducer: {
    }
})

export type RootState = ReturnType<typeof RootStore.getState>

export const useDispatch = () => useUntypedDispatch<typeof RootStore.dispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useUntypedSelector

export default RootStore
