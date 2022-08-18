import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomeLayout from "../components/layouts/homeLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kinected Strength</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-primary-dark grid grid-cols-2 relative">
        <div className="flex items-end pb-9 mt-[110px]">
          {/* FIXME: fix spacing at top with image */}
          <h1 className="font-display font-semibold flex flex-col home-banner-text">
            <span className="text-primary-light">It&apos;s </span>
            <span className="text-primary-light">more </span>
            <span className="text-secondary-light">than </span>
            <span className="text-secondary-dark">
              fitness<span className="text-primary-light">.</span>
            </span>
          </h1>
        </div>
        <div className="relative">
          <Image
            src="/temp/temp-image.png"
            alt="temp banner"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </div>

      <div className="bg-primary-dark h-screen">
        <div></div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
