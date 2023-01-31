import Testimonial from "./Testimonial";

export default function TestimonialBlock({
  testimonial = {},
  link = "/testimonials",
  word = "strength",
}) {
  return (
    <div className="bg-primary-light py-12 lg:px-24 md:px-12 px-8 flex flex-col items-center">
      <div className="flex flex-col max-w-6xl">
        <h3 className="uppercase text-xl mb-8">Testimonial</h3>
        <div className="flex md:flex-row flex-col md:items-center lg:gap-24 md:gap-16 gap-8 mb-4">
          <span className="font-bold text-primary-dark text-4xl">
            What is <span className="text-secondary-dark">{word}</span> to you?
          </span>
          <Testimonial
            image={testimonial.image}
            content={testimonial.content}
            author={testimonial.author}
          />
        </div>
      </div>
    </div>
  );
}
