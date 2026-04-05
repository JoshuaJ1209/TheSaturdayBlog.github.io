import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
}

export function CommentSection() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newComment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
    };

    setComments([newComment, ...comments]);
    setName("");
    setText("");
  };

  return (
    <div className="mt-16 max-w-2xl mx-auto">
      <h3 className="font-serif text-xl font-bold mb-8 text-foreground border-b border-border pb-2 inline-block">
        Leave a Note
      </h3>
      
      <form onSubmit={handleSubmit} className="mb-12 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full sm:w-1/2 p-3 bg-transparent border border-border font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground italic"
          />
        </div>
        <div>
          <textarea
            placeholder="Your thoughts..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            className="w-full p-3 bg-transparent border border-border font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground resize-none"
          />
        </div>
        <Button 
          type="submit" 
          variant="outline" 
          className="rounded-none border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background font-sans uppercase tracking-wider text-xs px-8"
          disabled={!name.trim() || !text.trim()}
        >
          Submit
        </Button>
      </form>

      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="border-t border-border pt-4">
            <p className="font-sans font-bold text-foreground text-sm mb-1">{comment.name}</p>
            <p className="font-sans text-xs italic text-muted-foreground mb-3">{comment.date}</p>
            <p className="font-sans text-foreground/90 leading-relaxed text-sm whitespace-pre-wrap">
              {comment.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}