export default function ArticleContainer({ children }) {
  return (
    <div className="flex flex-col bg-primary-dark text-primary-dark lg:px-24 md:px-8 px-4">
      <article className="flex flex-col bg-light-gray md:p-16 p-6 text-primary-dark relative self-center max-w-6xl w-full">
        {children}
      </article>
    </div>
  );
}
