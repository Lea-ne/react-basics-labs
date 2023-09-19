import React from 'react';

const Task = (props) => {
    
    return (
    
        <div>
            <p>{props.title}</p>
            <p>Due {props.deadline}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Task;