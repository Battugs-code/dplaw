import Image from "@/components/common/Image";
import { Link } from "@/i18n/navigation";
import type { NewsPost } from "@/data/news";

export default function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex h-full flex-col border border-line bg-white transition-shadow duration-300 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-soft">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-4 font-display text-[16px] font-semibold leading-snug text-ink transition-colors group-hover:text-crimson">
          {post.title}
        </h3>
        <time className="mt-auto pt-4 text-right text-[13px] text-muted">
          {post.date}
        </time>
      </div>
    </Link>
  );
}
