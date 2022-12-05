import Image from "next/image";
import { createRef, useEffect, useState } from "react";
import bannerImg from "../public/temp/tempbanner-horiz.jpg";

export default function Contact() {
  // email contact form
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

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
    <div className="mt-32">
      <Image
        id="bannerImage"
        src={bannerImg}
        layout="responsive"
        priority
        alt="// FIXME: add real alt text"
      />
      <div className="flex justify-center py-24 bg-light-gray px-64">
        <div className="flex flex-col">
          <h1 className="text-7xl mb-4 font-semibold">Get in touch.</h1>
          <p className="text-primary-dark max-w-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio.
          </p>

          <form
            className="flex flex-col text-primary-dark mt-8 min-w-2xl"
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

              <button
                type="submit"
                className="bg-primary-dark hover:bg-secondary-dark text-secondary-light text-md uppercase self-start px-6 py-2 rounded-full"
              >
                {isSending ? "Sending..." : "Submit"}
              </button>
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
    </div>
  );
}
