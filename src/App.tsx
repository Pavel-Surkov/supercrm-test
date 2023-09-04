import s from './App.module.scss';

import Header from './components/TodoHeader/TodoHeader';
import Todo from './components/Todo/Todo';
import { useCallback } from 'react';
import useFetch from './hooks/useFetch';

import type { UserData } from './types';

function App() {
  const { data, errorMessage } = useFetch<UserData[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );

  useCallback(() => {
    if (errorMessage) throw new Error(errorMessage);
  }, [errorMessage]);

  return (
    <main className={s.main}>
      <div className={s.todos}>
        <Header todosLoaded={data ? data.length : 0} />
        <div className="todos-wrapper">
          {data && data.map((data) => <Todo data={data} key={data.id} />)}
        </div>
      </div>
    </main>
  );
}

export default App;
