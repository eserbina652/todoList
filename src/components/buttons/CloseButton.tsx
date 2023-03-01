import React from 'react';

interface IClose {
    onClick: any
}

const CloseButton = ({onClick}: IClose) => {
    return (
        <div>
            <button onClick={onClick}>Close</button>
        </div>
    );
};

export default CloseButton;