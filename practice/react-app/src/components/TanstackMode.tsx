import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import axios from 'axios';

const Tanstack = () => {
  const queryClient = useQueryClient();

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['articles'],
    queryFn: () =>
      axios
        .get('http://localhost:3000/api/data/comments')
        .then((res) => res.data),
  });

  //   if (isPending) return 'Loading...';

  //   if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>Articles</h1>
      <ul>{data}</ul>
    </div>
  );
};

export default Tanstack;

// GET http://localhost:3000/api/data/articles
// GET http://localhost:3000/api/data/authors
// GET http://localhost:3000/api/data/boostrap
// GET http://localhost:3000/api/data/comments
