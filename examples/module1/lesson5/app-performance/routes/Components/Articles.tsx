import { useEffect, useState } from 'react';

import { Article } from '../../types/Article';
import { Bootstrap } from '../../types/Bootstrap';
import { Placeholder } from './Placeholder';
import axios from 'axios';
import { useAuthorsQuery } from './TanStackQuery';
import { useLoaderData } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

export function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const { articlesAPI, authorsAPI } = useLoaderData() as Bootstrap;

  const { data: authors } = useAuthorsQuery(authorsAPI);

  const mutation = useMutation({
    mutationFn: (newArticle: Article) => {
      setArticles((prevArticles) => [...prevArticles, newArticle]);

      return axios.post(articlesAPI, newArticle);
    },
  });

  useEffect(() => {
    axios
      .get<{ articles: Article[] }>(articlesAPI)
      .then(({ data: { articles } }) => {
        setArticles(articles);
      });
  }, []);

  return (
    <>
      <h2 className="font-bold text-xl mt-2">Articles</h2>
      {authorsAPI}
      {articlesAPI}
      {articles.length === 0 && <Placeholder lines={5} height={24} />}
      {articles.map((article) => (
        <div className="bg-white mt-2 p-2 rounded-lg shadow" key={article.id}>
          <h2 className="font-bold">{article.title}</h2>
          <p>{article.content}</p>
          <div className="flex flex-row items-center mb-2">
            <img
              src={`https://randomuser.me/api/portraits/women/${article.id}.jpg`}
              className="w-4 h-4 mr-1 rounded-full"
            />
            <p>{article.author}</p>
          </div>
        </div>
      ))}
      {authors && (
        <p className="text-right mt-4">Created by {authors.length} authors</p>
      )}
      <button
        onClick={() =>
          mutation.mutate({
            author: 'John Doe',
            content: 'Lorem ipsum',
            title: 'New article',
            id: articles.length + 1,
          })
        }
      >
        Add article
      </button>
    </>
  );
}
