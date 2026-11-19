// 404 page. Author: Dilshad Ali.
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap sec tight" style={{ paddingBottom: 104 }}>
      <p className="kick">404</p>
      <h1 className="h1" style={{ maxWidth: "14ch", marginTop: 12 }}>This page does not exist.</h1>
      <div className="ctas">
        <Link className="btn" href="/">Back to the home page</Link>
        <Link className="btn ghost" href="/contact/">Contact</Link>
      </div>
    </section>
  );
}
