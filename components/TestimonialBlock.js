import Link from "next/link";
import Button from "./Button";
import Testimonial from "./Testimonial";

export default function TestimonialBlock({
  testimonials = [],
  link = "/testimonials",
}) {
  return (
    <div className="bg-primary-light py-12 md:px-24 px-8 flex flex-col items-center">
      <div className="flex flex-col max-w-6xl">
        <h3 className="uppercase mb-8">Testimonials</h3>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 mb-4 md:mr-16">
          {testimonials.map((testimonial, i) => (
            <Testimonial
              key={i}
              content={testimonial.content}
              author={testimonial.author}
            />
          ))}
        </div>
        <Link href={link}>
          <a className="self-end">
            <Button>Read More &gt;&gt;</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
