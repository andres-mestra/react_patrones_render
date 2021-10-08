import { useState } from 'react';

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

export default App;
