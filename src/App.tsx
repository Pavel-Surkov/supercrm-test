import s from './App.module.scss';

import Header from './components/TodoHeader/TodoHeader';
import Todo from './components/Todo/Todo';
import { useCallback, useEffect, useRef } from 'react';
import useFetch from './hooks/useFetch';

import type { UserData } from './types';

function App() {
  const rootRef = useRef<HTMLDivElement>(null);

  const { data, errorMessage } = useFetch<UserData[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );

  useCallback(() => {
    if (errorMessage) throw new Error(errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    const rootEl = rootRef.current;

    if (!rootEl) {
      return;
    }

    const options = {
      root: rootEl,
      rootMargin: '0px 0px 100px 0px',
      threshold: 0,
    };

    const callback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Fetch new todos
          alert('fetched!');

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const target = Array.from(rootEl.children)[rootEl.children.length - 1];
    console.log(Array.from(rootEl.children));

    observer.observe(target);
  }, [rootRef, data]);

  return (
    <main className={s.main}>
      <div className={s.todos}>
        <Header todosLoaded={data ? data.length : 0} />
        <div className="todos-wrapper" ref={rootRef}>
          {data && data.map((data) => <Todo data={data} key={data.id} />)}
        </div>
      </div>
    </main>
  );
}

export default App;
