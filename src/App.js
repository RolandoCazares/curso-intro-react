import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
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
  const completeTodos = todos.filter((todo) => !!todo.completed).length;
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

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completeTodos} />
      {/* se le envian las dos props de useState al componente todoSerch */}
      <TodoSearch searchValue={searchValue} setSerachValue={setSerachValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
