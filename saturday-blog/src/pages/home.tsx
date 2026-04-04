import { blogs } from "@/data/blogs";
import { BlogPreview } from "@/components/BlogPreview";
import { Nav } from "@/components/Nav";

export default function Home() {
  const getDateline = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    return `Vol. I, No. 12 · ${formattedDate}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      <Nav />
      <main className="max-w-4xl mx-auto px-4 md:px-8">
        <header className="text-center mb-16">
          <div className="border-t border-b border-foreground py-6 mb-6">
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">
              THE SATURDAY BLOG
            </h1>
          </div>
          <p className="font-sans italic text-muted-foreground text-lg mb-6">
            Weekly insights on AI, Physics, Economics & Engineering
          </p>
          <hr className="border-border mb-2" />
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            {getDateline()}
          </p>
          <hr className="border-border mt-2" />
        </header>

        <div className="space-y-12">
          {blogs.slice(0, 3).map((post) => (
            <BlogPreview key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}