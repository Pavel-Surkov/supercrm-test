import { useState, useEffect } from 'react';

const useFetch = (url: string, options: RequestInit) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        setData(data);
      } catch (err: unknown) {
        let message: string = 'unknownError';

        if (err instanceof Error) {
          message = err.message;
        } else {
          message = String(err);
        }

        setError(message);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default useFetch;
