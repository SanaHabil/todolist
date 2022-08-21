import React, {useState} from 'react'
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/ToDoList';
import Header from './components/Header';


function App() {
  const [toDoList,setToDoList] = useState([])
  
  return (
    <div className="App">
      <header>
        <h1> Sana's To Do List</h1>
      </header>
      <Form toDoList={toDoList} setToDoList={setToDoList} />
      <TodoList toDoList={toDoList} setToDoList={setToDoList}  />
    </div>
  );
  };

export default App;