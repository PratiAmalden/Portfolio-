
import { contents } from "../data/contents";

function Contents() {
  return (
    <section
      className="contents section-shell"
      id="contents"
      aria-labelledby="contents-heading"
    >
      <h2 id="contents-heading">Table of contents</h2>

      <ol>
        {contents.map(({ number, title, href }) => (
          <li key={number}>
            <span aria-hidden="true">{number}</span>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ol>

      <div className="orb orb-contents" aria-hidden="true" />
    </section>
  );
}

export default Contents;
