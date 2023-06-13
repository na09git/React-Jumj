import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';


interface FetchGenresResponse{
    count: number;
    results: Genre[];
}
interface Genre {
  id: number;
  name: String;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>('');
const [isLoading,setLoading]=useState(false);

  useEffect(() => {
    const controller = new AbortController();
    
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error,isLoading };
};

export default useGenre;
