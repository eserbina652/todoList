import React from 'react';
import './createButton.css'

interface ICreateButton {
    onClick: ()=>void
}
const CreateButton = ({onClick}:ICreateButton) => {
    return (
        <div id='createWrap'>
            <button onClick={onClick}>Create</button>
        </div>
    );
};

export default CreateButton;