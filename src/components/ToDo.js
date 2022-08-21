import React from 'react';
const ToDo = ({toDo})=>{
    return (
        <div className={toDo.complete ? "strike" : ""}>
            {toDo.task}
        </div>
    );
};
export default ToDo;