import s from './App.module.scss';

import axios from 'axios';
import Header from './components/TodoHeader/TodoHeader';
import Todo from './components/Todo/Todo';
import { useCallback, useEffect, useRef, useState } from 'react';
import useFetch from './hooks/useFetch';

import type { UserData } from './types';

function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { data, errorMessage, setData } = useFetch<UserData[]>(
    'https://jsonplaceholder.typicode.com/todos?_page=1'
  );

  const [pageFetch, setPageFetch] = useState<number>(2);

  async function getTodos(): Promise<void> {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_page=${pageFetch}`
      );

      if (pageFetch <= 20) {
        setPageFetch((pageFetch) => pageFetch + 1);
      }

      setData((prev) => {
        return prev ? prev.concat(data) : data;
      });
    } catch (err: unknown) {
      let message = 'Unknown error';

      if (axios.isAxiosError(err)) {
        message = err.message;
      }

      throw new Error(message);
    }
  }

  useCallback(() => {
    if (errorMessage) throw new Error(errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    const rootEl = rootRef.current;
    const bottomEl = bottomRef.current;

    if (!rootEl || !bottomEl || !data) {
      return;
    }

    const options = {
      root: rootEl,
      rootMargin: '0px 0px 100px 0px',
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        getTodos();
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(bottomEl);

    return () => observer.disconnect();
  }, [rootRef, bottomRef, data]);

  return (
    <main className={s.main}>
      <div className={s.todos}>
        <Header todosLoaded={data ? data.length : 0} />
        <div className="todos-wrapper" ref={rootRef}>
          {data && data.map((data) => <Todo data={data} key={data.title} />)}
          {data && <div ref={bottomRef}></div>}
        </div>
      </div>
    </main>
  );
}

export default App;
