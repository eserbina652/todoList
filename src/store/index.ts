import {configureStore} from "@reduxjs/toolkit";
import {popupSlice} from "./reducers/popups";
import {todoSlice} from "./reducers/todos";


const store = configureStore({
    reducer: {
        popups: popupSlice.reducer,
        todo: todoSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store