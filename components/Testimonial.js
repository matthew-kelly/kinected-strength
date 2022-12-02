export default function Testimonial({ content, author }) {
  return (
    <div className="text-primary-dark">
      <p>{content}</p>
      <p className="mt-4 font-semibold">&ndash; {author}</p>
    </div>
  );
}
