'use client';

import { useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
}

const SimpleAppChecklistAndTests = ({ bookList }: { bookList: Book[] }) => {
  const [booksList, setBooksList] = useState(bookList);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBooksList([...booksList, { id: booksList.length + 1, title, author }]);
    setTitle('');
    setAuthor('');
  };

  const handleDelete = (id: number) => {
    setBooksList(booksList.filter((book) => book.id !== id));
  };

  return (
    <>
      <div>Simple App Checklist and Tests</div>
      <ul>
        {booksList.map((book) => (
          <li key={book.id}>
            <div className="flex flex-row justify-center pt-12 items-center">
              {book.title} - {book.author}
              <button
                className="ml-4"
                data-testid={`delete-button-${book.id}`}
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex  justify-center items-center align-middle mt-4">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
            />
            <label htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button type="submit" className=" ml-6">
            Dodaj książkę
          </button>
        </div>
      </form>
    </>
  );
};

export default SimpleAppChecklistAndTests;
