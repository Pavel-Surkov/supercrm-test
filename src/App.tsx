import s from './App.module.scss';

import { useCallback } from 'react';
import Header from './components/TodoHeader/TodoHeader';
import Todo from './components/Todo/Todo';

import useFetch from './hooks/useFetch';

type UserData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const { data, errorMessage } = useFetch<UserData>(
    'https://jsonplaceholder.typicode.com/todos'
  );

  useCallback(() => {
    if (errorMessage) throw new Error(errorMessage);
  }, [errorMessage]);

  return (
    <main className={s.main}>
      <div className={s.todos}>
        <Header />
        <div className="todos-wrapper">
          {data && data.map((data) => <Todo data={data} key={data.id} />)}
        </div>
      </div>
    </main>
  );
}

export default App;
