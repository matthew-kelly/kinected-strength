import Head from "next/head";
import ButtonLink from "@/components/ButtonLink";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found | Kinected Strength</title>
      </Head>
      <div className="flex flex-col justify-center items-center bg-light-gray lg:px-24 md:px-16 px-8 md:py-20 md:pb-32 py-12 text-primary-dark">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h1 className="uppercase text-3xl my-4">
            404 &mdash; Page not found
          </h1>
          <p className="text-lg mb-8">
            The page you were looking for couldn&apos;t be found.
          </p>
          <ButtonLink href="/" className="large">
            Back to Home
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
