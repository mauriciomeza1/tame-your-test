import { useState, useCallback } from "react";

export function useFetchDoggo() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDoggo = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://shibe.online/api/shibes?count=1&urls=true&httpsHttps=true"
      );
      const data = await response.json();
      setDogImage(data[0]);
    } catch (error) {
      setError("Failed to fetch dog image.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { dogImage, isLoading, error, fetchDoggo };
}
