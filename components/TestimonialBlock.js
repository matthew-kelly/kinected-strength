import { Carousel } from "react-responsive-carousel";
import Testimonial from "./Testimonial";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useWindowSize } from "@/lib/useWindowSize";
import { breakpoints } from "@/utils/theme";

export default function TestimonialBlock({
  testimonials = [],
  question = "",
  highlight = "",
  showTitle = true,
}) {
  const phrase = question.replace(
    highlight,
    `<span class="text-secondary-dark">${highlight}</span>`
  );
  const windowSize = useWindowSize();
  return (
    <div className="bg-primary-light py-12 lg:px-24 md:px-12 px-8 flex flex-col items-center">
      <div className="flex flex-col max-w-6xl">
        {showTitle && <h3 className="uppercase text-xl mb-8">Testimonials</h3>}
        <div className="flex md:flex-row flex-col md:items-center lg:gap-16 md:gap-12 gap-8 md:mb-4">
          <p
            className="font-bold text-primary-dark text-3xl sm:text-4xl sm:min-w-72"
            dangerouslySetInnerHTML={{ __html: `${phrase}?` }}
          ></p>
          <Carousel
            autoPlay={false}
            autoFocus={false}
            emulateTouch={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            preventMovementUntilSwipeScrollTolerance={
              windowSize.width < breakpoints.md
            }
            swipeScrollTolerance={50}
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
