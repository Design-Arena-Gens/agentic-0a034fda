export default function Section({ id, badge, title, description, children }) {
  return (
    <section id={id}>
      <header>
        <span className="badge">{badge}</span>
        <h2>{title}</h2>
      </header>
      {description && <p>{description}</p>}
      {children}
    </section>
  );
}
