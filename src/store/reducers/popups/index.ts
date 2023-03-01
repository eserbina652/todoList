import {Nullable} from "../../../utils/types";
import {ITodo} from "../../../components/todo/types";
import {createSlice} from "@reduxjs/toolkit";

interface IPopups {
    isOpen: boolean;
    item: Nullable<ITodo>
}

const initialState: IPopups = {
    isOpen: false,
    item: null
}

export const popupSlice = createSlice({
    name: 'popups',
    initialState,
    reducers: {
        onOpen: (state) => {
            state.isOpen = true
            return state
        },
        onClose: (state) => {
            state.isOpen = initialState.isOpen
            state.item = initialState.item
            return state
        }
    }
})

export const { onOpen, onClose } = popupSlice.actions

export default popupSlice.reducer