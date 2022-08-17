import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Main blog page /blog</p>
      <Link href="/blog/example-post">
        <a>Blog Post</a>
      </Link>
    </div>
  );
}
