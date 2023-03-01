import React, {useEffect, useState} from 'react';
import CreateButton from "./components/buttons/CreateButton";
import './App.css'
import Popup from "./components/popups/Popup";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {onAdd} from "./store/reducers/todos";
import Todo from "./components/todo/Todo";
import {onOpen} from "./store/reducers/popups";
import {ITodo} from "./components/todo/types";
import {Nullable} from "./utils/types";

function App() {
    const dispatch = useDispatch()
    const isOpenPopup = useTypedSelector(state => state.popups.isOpen)
    const todoList = useTypedSelector(state => state.todo.todoList)
    const [value, setValue] = useState({title: '', description: ''})
    const [currentTodoId, setCurrentTodoId] = useState<Nullable<number>>(null)
    const [err, setErr] = useState({titleError: false, descriptionError: false})

    const onCreate = () => {
        if (value.title && value.description) {
            dispatch(onAdd({...value}))
        } else {
            setErr({titleError: !value.title, descriptionError: !value.description})
        }
    }
    const handleSelect = (el:ITodo) => {
        setCurrentTodoId(el.id)
    }
    const onOpenPopup = () => {
        dispatch(onOpen())
    }
    useEffect(() => {
        if (err.titleError || err.descriptionError) {
            setErr({titleError: false, descriptionError: false})
        }
    },[value])
    return (
      <>
          {isOpenPopup && <Popup id={currentTodoId}/>}
      <div id='wrapper'>
        <div className='flex'>
            <div id='inputWrap'>
                <h3>Title:</h3>
                <input
                    className={err.titleError?'error':'valid'}
                    type='text'
                    placeholder='enter title'
                    value={value.title}
                    onChange={event => setValue(prevState => ({...prevState, title: event.target.value}))}
                />
                {err.titleError && <div className='errorText'>This field is empty</div>}
            </div>
                <div id='inputWrap'>
                    <h3>Description:</h3>
                    <input
                        className={err.descriptionError?'error':'valid'}
                        type='text'
                        placeholder='enter description'
                        value={value.description}
                        onChange={event => setValue(prevState => ({...prevState, description: event.target.value}))}
                    />
                    {err.descriptionError && <div className='errorText'>This field is empty</div>}
                </div>
          <CreateButton onClick={onCreate}/>
        </div>
          <div style={{display:'flex', flexDirection: 'column'}}>
              <div className='todoHeader'>
                  <h2>ID</h2>
                  <h2>TITLE</h2>
                  <h2>DESCRIPTION</h2>
                  <h2>STATUS</h2>
              </div>
              <div style={{display:'flex', flexDirection: 'column'}} onClick={onOpenPopup}>
              {todoList.map((todo, index) => (
                  <Todo handleSelect={handleSelect} todo={todo} key={index.toString()}/>
              ))}
              </div>
          </div>
      </div>
      </>
  );
}

export default App;
