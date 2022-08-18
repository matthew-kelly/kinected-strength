import HomeLayout from "../components/layouts/homeLayout";

export default function OurStory() {
  return (
    <div>
      <h1>Our Story</h1>
    </div>
  );
}

OurStory.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
