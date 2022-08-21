import React from 'react';

const ToDoList = (props)=>{
    const {toDoList,setToDoList} = props;

    const clickHandler = (index) => {

        const list = toDoList
        const obj = list[index]
        obj.completed = !obj.completed
        setToDoList([...list])
        
    }
    const deleteHandler = (index)=>{
        const newList = toDoList.filter((item,idx)=>{
            return idx !== index
        })
        setToDoList([...newList])
    }
    return (
        <div className="todo-container">
            {/* <ul className="todo-list"></ul> */}
            {
                toDoList.map((item,index) =>(
                <div className="todolistdiv" key={index}>
                <ul className="ulstyle">
                    <h3 className="h3style" style={item.completed?{textDecoration:'line-through'}:null}>{item.toDo}</h3>
                    <h3 className="h3style">Completed:{item.completed}</h3>
                    <input className="inputstyle" onChange={()=>clickHandler(index)} type="checkbox" name="" id="" />
                    <button onClick ={()=>deleteHandler(index)} className="deletbutton">Delete</button>
                </ul>
                </div>
                ))
        }
        </div>
    );
};
export default ToDoList;