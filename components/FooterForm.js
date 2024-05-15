import { useState } from "react";
import Button from "./Button";

export default function FooterForm({}) {
  // email contact form for footer
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsError(false);
    setErrorMessage("");
    setIsSent(false);

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        honeypot,
      }),
    });
    if (res.status === 200) {
      setIsSent(true);
      setIsSending(false);
    } else {
      const response = await res.json();
      setIsError(true);
      setErrorMessage(response.error);
      setIsSending(false);
    }
  };

  return (
    <form
      className="flex flex-col text-primary-light w-full md:mt-0 mt-2"
      onSubmit={handleSubmit}
    >
      <span className="font-display font-semibold text-xl mb-2 md:self-end">
        Subscribe to our newsletter!
      </span>
      <div className="flex flex-col gap-2">
        <div className="grid md:grid-cols-2 md:gap-4 gap-2 md:justify-evenly">
          <div className="flex items-end gap-2 grow">
            <label
              htmlFor="first-name-footer"
              className="text-sm font-display whitespace-nowrap"
            >
              First Name
            </label>
            <input
              type="text"
              name="first name"
              id="first-name-footer"
              className="m-0 p-0 bg-primary-dark border-0 border-b-2 border-primary-light focus:ring-0 focus:border-secondary-light text-base font-display w-full text-secondary-light"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex items-end gap-2 grow">
            <label
              htmlFor="last-name-footer"
              className="text-sm font-display whitespace-nowrap"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last name"
              id="last-name-footer"
              className="m-0 p-0 bg-primary-dark border-0 border-b-2 border-primary-light focus:ring-0 focus:border-secondary-light text-base font-display w-full text-secondary-light"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-end gap-2 grow">
          <label htmlFor="email-footer" className="text-sm font-display">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email-footer"
            className="m-0 p-0 bg-primary-dark border-0 border-b-2 border-primary-light focus:ring-0 focus:border-secondary-light text-base font-display w-full text-secondary-light"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <input
          type="hidden"
          name="favorite_color"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />

        {isError && (
          <p className="text-base mt-1 font-display font-semibold text-secondary-dark md:self-end">
            {errorMessage}
          </p>
        )}
        {isSent ? (
          <p className="text-base mt-1 font-display font-semibold text-secondary-light md:self-end">
            Thanks for subscribing!
          </p>
        ) : (
          <Button type="submit" className="light mt-2 md:self-end">
            {isSending ? "Subscribing..." : "Subscribe"}
          </Button>
        )}
      </div>
    </form>
  );
}
