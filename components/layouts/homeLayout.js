import Nav from "../Nav";
import Footer from "../Footer";

// FIXME: rethink if layout is necessary

export default function HomeLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-primary-dark">
      <Nav />
      <main className="body">{children}</main>
      <Footer />
    </div>
  );
}
