import { Calculator } from "./calculator";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Gitar Demo</p>
        <h1>See the hours code review automation gives back</h1>
        <p className="lede">
          Estimate the engineering time your team reclaims each week when Gitar
          reviews, fixes, and merges routine pull requests for you.
        </p>
      </section>

      <Calculator />

      <footer className="footer">
        Numbers are illustrative — this app exists to demo the Gitar review &amp;
        auto-merge flow.
      </footer>
    </main>
  );
}
