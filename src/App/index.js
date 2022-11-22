import React from "react";
import { AppUI } from "./AppUI";

// import './App.css';

const defaulttodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: true },
];

function App() {
  /* //estado para los todos */
  const [todos, setTodos] = React.useState(defaulttodos);
  /* //se declaran las variables de estado que se van a mandar al componente todoSerch */
  const [searchValue, setSerachValue] = React.useState("");
  /* //variable para contar cuantos todos se han completado y cuantos se tienene en total */
  /* //cada vez que los todos cambien o el searchvalue cambie se volvera a hacer la cuenta */
  /* // (!!todo.complete) == (todo.complete == true) length para contar cuantos se completaron */
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
    /* todos[todoIndex] = {
      text: todos[todoIndex].text, 
      completed: true,
    } */
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    /* todos[todoIndex] = {
      text: todos[todoIndex].text, 
      completed: true,
    } */
  };
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSerachValue={setSerachValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
