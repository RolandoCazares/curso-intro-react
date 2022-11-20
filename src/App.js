import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: false },
];

function App() {

  const []
  //se declaran las variables de estado que se van a mandar al componente todoSerch
  const [searchValue, setSerachValue] = React.useState("");

  return (
    <React.Fragment>
      <TodoCounter />
      {/* se le envian las dos props de useState al componente todoSerch */}
      <TodoSearch searchValue={searchValue} setSerachValue={setSerachValue} />
      <TodoList>
        {todos.map((todo) => (
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
