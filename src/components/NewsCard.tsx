import Image from "@/components/common/Image";
import { Link } from "@/i18n/navigation";
import type { NewsPost } from "@/data/news";

export default function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-white transition-shadow duration-300 hover:shadow-[0_12px_32px_-12px_rgba(27,21,23,0.18)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-cream">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time className="tabular text-xs font-semibold uppercase tracking-widest text-crimson">
          {post.date}
        </time>
        <h3 className="mt-2 line-clamp-4 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-crimson">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}
