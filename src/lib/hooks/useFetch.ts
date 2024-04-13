// hooks/useFetch.ts

import { useState, useEffect } from "react";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T>(fetchFunction: () => Promise<Response>): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchFunction();
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData: T = await response.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, loading, error };
};

export default useFetch;
