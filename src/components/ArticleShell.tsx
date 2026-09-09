import type { ReactNode } from "react";
import Image from "@/components/common/Image";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/site/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type SiblingLink = { slug: string; title: string };

export default function ArticleShell({
  backHref,
  backLabel,
  date,
  title,
  image,
  children,
  prev,
  next,
  siblingHrefPrefix,
  prevLabel,
  nextLabel,
}: {
  backHref: string;
  backLabel: string;
  date: string;
  title: string;
  image: string | null;
  children: ReactNode;
  prev?: SiblingLink | null;
  next?: SiblingLink | null;
  siblingHrefPrefix: string;
  prevLabel?: string;
  nextLabel?: string;
}) {
  return (
    <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 lg:py-16">
      <Reveal>
        <Link
          href={backHref}
          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-crimson"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {backLabel}
        </Link>
      </Reveal>

      <Reveal>
        <header className="mt-8">
          <time className="tabular text-xs font-semibold uppercase tracking-[0.2em] text-crimson">
            {date}
          </time>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[44px]">
            {title}
          </h1>
        </header>
      </Reveal>

      {image ? (
        <Reveal>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-md bg-cream">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width:1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      ) : null}

      <Reveal>
        <div className="mt-10 space-y-5 text-[17px] leading-relaxed text-body">
          {children}
        </div>
      </Reveal>

      {prev || next ? (
        <nav
          aria-label="More posts"
          className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`${siblingHrefPrefix}/${prev.slug}`}
              className="group rounded-md border border-line p-5 transition-colors hover:border-crimson"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted">
                <ArrowLeft className="h-3.5 w-3.5" /> {prevLabel ?? "Previous"}
              </span>
              <span className="mt-2 line-clamp-2 block font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-crimson">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`${siblingHrefPrefix}/${next.slug}`}
              className="group rounded-md border border-line p-5 text-right transition-colors hover:border-crimson"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted">
                {nextLabel ?? "Next"} <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="mt-2 line-clamp-2 block font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-crimson">
                {next.title}
              </span>
            </Link>
          ) : null}
        </nav>
      ) : null}
    </article>
  );
}
