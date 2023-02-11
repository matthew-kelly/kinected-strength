import { Carousel } from "react-responsive-carousel";
import Testimonial from "./Testimonial";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function TestimonialBlock({
  testimonials = [],
  question = "",
  highlight = "",
}) {
  const phrase = question.replace(
    highlight,
    `<br /><span class="text-secondary-dark">${highlight}</span>`
  );
  return (
    <div className="bg-primary-light py-12 lg:px-24 md:px-12 px-8 flex flex-col items-center">
      <div className="flex flex-col max-w-6xl">
        <h3 className="uppercase text-xl mb-8">Testimonials</h3>
        <div className="flex md:flex-row flex-col md:items-center lg:gap-16 gap-8 md:mb-4">
          <span
            className="font-bold text-primary-dark text-4xl min-w-[250px]"
            dangerouslySetInnerHTML={{ __html: `${phrase}?` }}
          ></span>
          <Carousel
            autoPlay={false}
            autoFocus={false}
            emulateTouch={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
          >
            {testimonials.map((item, index) => (
              <Testimonial
                key={item._id}
                content={item.content}
                author={item.author}
                isFirst={index === 0}
                count={testimonials.length}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
