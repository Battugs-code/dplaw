import Reveal from "./Reveal";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <Reveal>
          <p className="mb-3 h-px w-14 bg-crimson" aria-hidden />
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
