import Image from "next/legacy/image";
import { createRef, useEffect, useState } from "react";
import Button from "../components/Button";
import bannerImg from "../public/images/get-in-touch.jpg";
import { useWindowSize } from "../lib/useWindowSize";
import { breakpoints } from "../utils/theme";
import MetaTags from "../components/MetaTags";

export default function Contact() {
  // email contact form
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const windowSize = useWindowSize();

  const messageBlock = createRef();
  const [messageBlockHeight, setMessageBlockHeight] = useState(null);

  const calcMessageBlockHeight = () => {
    const elem = messageBlock.current;
    console.log(messageBlockHeight, elem.offsetHeight, elem.scrollHeight);
    if (elem.value.length === 0) {
      setMessageBlockHeight(24); // line height
    } else if (
      elem.scrollHeight > 24 &&
      elem.scrollHeight < messageBlockHeight
    ) {
      setMessageBlockHeight(messageBlockHeight - 24);
    } else if (elem.scrollHeight + 2 !== elem.offsetHeight) {
      setMessageBlockHeight(elem.scrollHeight);
    }
  };

  useEffect(() => {
    setMessageBlockHeight(messageBlock.current.offsetHeight);
  }, [messageBlock]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsError(false);
    setIsSent(false);

    // FIXME: set up API route for sending email
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name: `${firstName} ${lastName}`,
        message,
      }),
    });
    if (res.status === 200) {
      setIsSent(true);
      setIsSending(false);
    } else {
      setIsError(true);
      setIsSending(false);
    }
  };

  return (
    <>
      <MetaTags
        title="Get in touch"
        description="Come say hi to get strong, feel confident and see concrete results."
        slug="contact"
        image={{ src: bannerImg.src, isExternal: false }}
      />

      <div className="flex flex-col">
        <Image
          id="bannerImage"
          src={bannerImg}
          sizes="100vw"
          layout="responsive"
          priority
          alt="Andrea, Jess, and Briana sitting on the grass"
          placeholder="blur"
        />
        <div className="flex justify-center lg:py-24 md:py-16 py-8 bg-light-gray lg:px-64 md:px-32 px-8">
          <div className="flex flex-col">
            <h1 className="lg:text-7xl md:text-6xl text-5xl mb-6 font-extrabold">
              Get in touch.
            </h1>
            <p className="text-primary-dark max-w-lg font-bold text-base">
              Come say hi to get strong, feel confident and see concrete
              results.
            </p>

            <form
              className="flex flex-col text-primary-dark mt-16 md:min-w-2xl"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-10 font-display">
                <div className="flex items-end">
                  <label
                    htmlFor="firstName"
                    className="border-b-2 border-b-primary-dark pr-2 text-sm uppercase whitespace-nowrap font-semibold"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="m-0 p-0 pl-2 border-0 border-b-2 border-b-primary-dark focus:border-b-secondary-dark focus:ring-0 text-md bg-transparent grow"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="flex items-end">
                  <label
                    htmlFor="lastName"
                    className="border-b-2 border-b-primary-dark pr-2 text-sm uppercase whitespace-nowrap font-semibold"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="m-0 p-0 pl-2 border-0 border-b-2 border-b-primary-dark focus:border-b-secondary-dark focus:ring-0 text-md bg-transparent grow"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="flex items-end">
                  <label
                    htmlFor="email"
                    className="border-b-2 border-b-primary-dark pr-2 text-sm uppercase whitespace-nowrap font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="m-0 p-0 pl-2 border-0 border-b-2 border-b-primary-dark focus:border-b-secondary-dark focus:ring-0 text-md bg-transparent grow"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex items-end">
                  <label
                    htmlFor="message"
                    className="border-b-2 border-b-primary-dark pr-2 text-sm uppercase whitespace-nowrap font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    ref={messageBlock}
                    rows="1"
                    name="message"
                    id="message"
                    className="m-0 p-0 pl-2 border-0 border-b-2 border-b-primary-dark focus:border-b-secondary-dark focus:ring-0 text-md bg-transparent grow resize-none overflow-hidden"
                    style={{ height: messageBlockHeight + "px" }}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      calcMessageBlockHeight();
                    }}
                  />
                </div>

                <Button type="submit" className="md:large">
                  {isSending ? "Sending..." : "Submit"}
                </Button>
                {isSent && (
                  <p className="text-lg font-display font-semibold">
                    Message sent!
                  </p>
                )}
                {isError && (
                  <p className="text-lg font-display font-semibold text-secondary-dark">
                    Error sending message
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="w-full bg-light-gray">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.280737739979!2d-123.07635148399432!3d49.30896687682839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671e460619c1b%3A0xd130a8b8f72514e0!2sKinected%20Strength!5e0!3m2!1sen!2sca!4v1674508975221!5m2!1sen!2sca"
            width={windowSize.width}
            height={windowSize.width > breakpoints.sm ? 300 : 375}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
