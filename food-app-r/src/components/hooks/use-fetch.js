import { configure } from "@testing-library/react";
import { useCallback, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      setIsLoading(true);

      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error("Error");
      }

      const data = await response.json();

      applyData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message || "Erorr has occured");
      setIsLoading(false);
    }
  }, []);
  return { error, isLoading, sendRequest };
};

export default useFetch;
