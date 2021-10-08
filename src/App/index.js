import { useState } from 'react';
import { AppUI } from './AppUI';

function App() {
  const [state, setstate] = useState('Estado compartido');
  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </>
  );
}

function TodoHeader({ children }) {
  return <header>{children}</header>;
}

function TodoList({ children }) {
  return <section className="TodoList-container">{children}</section>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}

function TodoCounter() {
  return <p>TodoCounter</p>;
}

function TodoItem({ state }) {
  return <p>TodoItem: {state}</p>;
}
/* function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
} */

export default App;
