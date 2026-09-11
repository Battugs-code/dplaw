import Reveal from "./Reveal";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1300px] px-5 pb-4 pt-16 text-center sm:px-8 lg:pt-20">
        <Reveal>
          <h1 className="font-display text-3xl font-semibold text-muted sm:text-4xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
