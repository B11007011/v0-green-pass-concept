"use client";

import { useState, useEffect } from "react";

interface UseDataOptions<T> {
  initialData?: T;
  fetchFn: () => Promise<T>;
  revalidateOnFocus?: boolean;
  revalidateOnReconnect?: boolean;
  errorRetryCount?: number;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

interface UseDataResult<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  mutate: () => void;
}

/**
 * Custom hook for data fetching with caching and error handling
 */
export function useData<T>({
  initialData,
  fetchFn,
  revalidateOnFocus = true,
  revalidateOnReconnect = true,
  errorRetryCount = 3,
  onSuccess,
  onError,
}: UseDataOptions<T>): UseDataResult<T> {
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(!initialData);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  // Function to fetch data
  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const result = await fetchFn();
      setData(result);
      setIsLoading(false);
      if (onSuccess) onSuccess(result);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      const fetchError = err instanceof Error ? err : new Error(String(err));
      setError(fetchError);
      if (onError) onError(fetchError);

      // Auto retry on error
      if (retryCount < errorRetryCount) {
        const timeout = setTimeout(() => {
          setRetryCount(prev => prev + 1);
          fetchData();
        }, 1000 * Math.pow(2, retryCount)); // Exponential backoff

        return () => clearTimeout(timeout);
      }
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Revalidate on focus
  useEffect(() => {
    if (!revalidateOnFocus) return;

    const onFocus = () => {
      fetchData();
    };

    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("focus", onFocus);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revalidateOnFocus]);

  // Revalidate on reconnect
  useEffect(() => {
    if (!revalidateOnReconnect) return;

    const onOnline = () => {
      fetchData();
    };

    window.addEventListener("online", onOnline);
    return () => {
      window.removeEventListener("online", onOnline);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revalidateOnReconnect]);

  // Function to manually trigger a refetch
  const mutate = () => {
    setRetryCount(0);
    fetchData();
  };

  return {
    data,
    isLoading,
    isError,
    error,
    mutate,
  };
} 