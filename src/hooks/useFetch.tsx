import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function getData(): Promise<void> {
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (err: unknown) {
        let message = 'Unknown error';

        if (axios.isAxiosError(err)) {
          message = err.message;
        }

        setErrorMessage(message);
      }
    }

    getData();
  }, []);

  return { data, errorMessage };
}

export default useFetch;
