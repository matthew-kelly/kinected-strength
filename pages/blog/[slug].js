import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1>Blog post page - {slug}</h1>
    </div>
  );
}
