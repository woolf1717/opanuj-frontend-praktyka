export const GameIntro = () => {
  return (
    <section aria-labelledby="question-heading" tabIndex={-1}>
      <h1 className="text-2xl text-violet-500 mb-4">
        Witaj w grze zgadywania hasła!
      </h1>
      <h2 id="question-heading" className="sr-only">
        Pytanie
      </h2>
      <p aria-labelledby="question-heading">
        Jak nazywa się postać z serialu Rick and Morty widoczna po prawej
        stronie ekranu?
      </p>
    </section>
  );
};
