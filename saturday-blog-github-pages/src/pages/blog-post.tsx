import { useParams, Link } from "wouter";
import { blogs } from "@/data/blogs";
import { Nav } from "@/components/Nav";
import { RatingWidget } from "@/components/RatingWidget";
import { CommentSection } from "@/components/CommentSection";
import NotFound from "@/pages/not-found";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      <Nav />
      <main className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-10">
          <Link href="/" className="font-sans text-sm italic text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>

        <article>
          <header className="mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold block mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            <p className="font-sans text-sm italic text-muted-foreground">
              By {post.author} · {post.date} · {post.readTime}
            </p>
          </header>

          <hr className="border-border mb-12" />

          <div className="font-sans text-lg text-foreground/90 leading-[1.8] md:columns-2 md:gap-12 article-body">
            {post.body.map((paragraph, index) => (
              <p 
                key={index} 
                className={`mb-6 break-inside-avoid-column ${
                  index === 0 ? "first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.8] first-letter:mt-2" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <hr className="border-foreground border-t-2 mt-12" />

          <RatingWidget />
          <CommentSection />
        </article>
      </main>
    </div>
  );
}