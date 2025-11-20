export default function Hero({ badge, title, description, primaryAction, secondaryAction }) {
  return (
    <section className="hero">
      <span className="badge">{badge}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="hero-actions">
        <a href={primaryAction.href}>{primaryAction.label}</a>
        <a href={secondaryAction.href}>{secondaryAction.label}</a>
      </div>
    </section>
  );
}
