import { Author } from '../../types/Authors';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export function useAuthorsQuery(authorsAPI: string) {
  return useQuery({
    queryKey: ['authors'],
    queryFn: async () => {
      const response = await axios.get<{ authors: Author[] }>(authorsAPI);
      return response.data.authors;
    },
  });
}
