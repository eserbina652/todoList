import React from 'react';
import CloseButton from "../buttons/CloseButton";
import './popup.css'
import {useDispatch} from "react-redux";
import {onClose} from "../../store/reducers/popups";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {onUpdate} from "../../store/reducers/todos";
import {Nullable} from "../../utils/types";

interface IPopup {
    id: Nullable<number>
}
const Popup = ({id}: IPopup) => {
    const dispatch = useDispatch()
    const todoList = useTypedSelector(state => state.todo.todoList)
    const currentEl = todoList.find(el => el.id === id)
    const onChange = () => {
        dispatch(onUpdate(id))
    }

    const onClosePopup = () => {
        dispatch(onClose())
    }
    return (
        <div id='mainWindow'>
            <div id='secondaryWindow'>
                <div id='popupContent'>
                    <h2>{currentEl?.title}</h2>
                    <h4>description</h4>
                    <p>{currentEl?.description}</p>
                    <div id='checkboxWrap'>
                        <p>status</p>
                        <input type="checkbox" checked={currentEl?.status} onChange={onChange}/>
                    </div>
                    <CloseButton onClick={onClosePopup}/>
                </div>
            </div>
        </div>
    );
};

export default Popup;