import React,{useState} from 'react';

const Form = (props) =>{
    const {toDoList,setToDoList} = props;

    const [toDo,setToDo] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        if(toDo.toDo.trim() === ""){
            return
        }
        setToDoList([...toDoList,toDo])
        setToDo({toDo:"",completed:true})
    }

    const inputHandler = (e)=>{
        
        setToDo({toDo:e.target.value, completed:false})
    }

    return (
        <form onSubmit={submitHandler} type="text" className="todo-input">
            <input value ={toDo.toDo} onChange={inputHandler} type="text" />
            <button type = "submit" className="todo-button">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
};
export default Form;