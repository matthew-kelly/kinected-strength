import Link from "next/link";
import Button from "./Button";
import Testimonial from "./Testimonial";

export default function TestimonialBlock({
  testimonials = [],
  link = "/testimonials",
}) {
  return (
    <div className="bg-primary-light py-12 px-24 flex flex-col">
      <h3 className="uppercase mb-8">Testimonials</h3>
      <div className="grid grid-cols-2 gap-16 mb-4 mr-16">
        {testimonials.map((testimonial, i) => (
          <Testimonial
            key={i}
            content={testimonial.content}
            author={testimonial.author}
          />
        ))}
      </div>
      <Button className="self-end">
        <Link href={link}>
          <a>Read More &gt;&gt;</a>
        </Link>
      </Button>
    </div>
  );
}
