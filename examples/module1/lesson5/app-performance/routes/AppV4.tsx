// @ts-ignore-next-line

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Articles } from './Components/Articles';
import { ArticlesTwo } from './Components/ArticlesTwo';

const queryClient = new QueryClient();

export default function ExerciseApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-7xl mx-auto">
        <Articles />
        <ArticlesTwo />
      </div>
    </QueryClientProvider>
  );
}
