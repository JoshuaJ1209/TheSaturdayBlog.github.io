import { blogs } from "@/data/blogs";
import { BlogPreview } from "@/components/BlogPreview";
import { Nav } from "@/components/Nav";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      <Nav />
      <main className="max-w-4xl mx-auto px-4 md:px-8">
        <header className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Archive
          </h1>
          <hr className="border-border border-t-2" />
        </header>

        <div className="space-y-12">
          {blogs.map((post) => (
            <BlogPreview key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}