import { Link } from "wouter";

export function Nav() {
  return (
    <nav className="w-full border-b border-border py-4 mb-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="font-serif font-bold text-lg text-foreground hover:opacity-80 transition-opacity">
          THE SATURDAY BLOG
        </Link>
        <div className="flex space-x-6 text-sm font-sans">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4 decoration-muted-foreground/50">
            Home
          </Link>
          <Link href="/blogs" className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4 decoration-muted-foreground/50">
            All Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
}