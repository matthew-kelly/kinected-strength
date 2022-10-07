import { useState } from "react";

export default function FooterForm({}) {
  // email contact form for footer
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

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
        name,
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
    <form className="flex flex-col text-primary-light" onSubmit={handleSubmit}>
      <span className="font-display font-semibold text-xl mb-1">
        Get in touch with us!
      </span>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 justify-evenly">
          <div className="flex items-end gap-2 grow">
            <label htmlFor="name" className="text-md font-display">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="text-md font-display w-full max-w-[120px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex items-end gap-2 grow">
            <label htmlFor="email" className="text-md font-display">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-md font-display w-full max-w-[120px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-end gap-2">
          <label htmlFor="message" className="text-md font-display">
            Message
          </label>
          <input
            type="text"
            name="message"
            id="message"
            className="text-md font-display w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-primary-light text-primary-dark text-md font-display uppercase mt-1 self-start px-2 py-1"
        >
          {isSending ? "Sending..." : "Submit"}
        </button>
        {isSent && (
          <p className="text-md font-display font-semibold">Message sent!</p>
        )}
        {isError && (
          <p className="text-2xl font-display font-semibold text-secondary-dark">
            Error sending message
          </p>
        )}
      </div>
    </form>
  );
}
