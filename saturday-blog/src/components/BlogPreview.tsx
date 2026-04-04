import { Link } from "wouter";
import { BlogPost } from "@/data/blogs";

interface BlogPreviewProps {
  post: BlogPost;
}

export function BlogPreview({ post }: BlogPreviewProps) {
  return (
    <div className="group cursor-pointer">
      <Link href={`/blog/${post.id}`} className="block">
        <div className="mb-2">
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-sans">
            ISSUE {post.issue}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 leading-tight group-hover:opacity-80 transition-opacity">
          {post.title}
        </h2>
        <div className="mb-3">
          <span className="text-xs font-sans uppercase tracking-[0.15em] text-muted-foreground font-semibold">
            {post.category}
          </span>
        </div>
        <p className="text-foreground/80 font-sans italic text-sm mb-4">
          {post.author} · {post.date}
        </p>
        <p className="font-sans text-foreground/90 leading-relaxed mb-8">
          {post.summary}
        </p>
        <hr className="border-border group-last:hidden" />
      </Link>
    </div>
  );
}