import { useState } from "react";
import './App.css';

function App() {
  let [todolist, setTodoList] = useState([]);

  let saveToDoList = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value;

    if (!todolist.includes(toname)) {
      let finalDoList = [...todolist, toname];
      setTodoList(finalDoList);
    } else {
      alert("already added");
    }
  };

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        indexNumber={index}
        todolist={todolist}
        setTodoList={setTodoList}
      />
    );
  });

  return (
    <div className="app">
    <h1>To Do List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" /> <button>save</button>
      </form>

      <div className="outerdiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, todolist, setTodoList }) {

let [status, setStatus] = useState (false);

  let dltrow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber);
    setTodoList(finalData);
  };

  let checkStatus =()=> {
     setStatus (!status)
  }

  return (
    <li className={(status)? 'completetodo': ''} onClick={checkStatus}> {value} <span onClick={dltrow}> &times; </span> </li>
  );
}
