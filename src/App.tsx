import s from './App.module.scss';

import Header from './components/TodoHeader/TodoHeader';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <main className={s.main}>
      <div className={s.todos}>
        <Header />
        <div className="todos-wrapper">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </main>
  );
}

export default App;
