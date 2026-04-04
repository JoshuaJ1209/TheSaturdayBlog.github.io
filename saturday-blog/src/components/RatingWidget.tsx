import { useState } from "react";
import { Button } from "@/components/ui/button";

export function RatingWidget() {
  const [rating, setRating] = useState<number | null>(null);

  const getResponse = (r: number) => {
    if (r <= 2) return "Thank you for your feedback.";
    if (r <= 4) return "We appreciate your honest rating.";
    if (r <= 6) return "Glad you enjoyed this piece.";
    return "Excellent — thank you!";
  };

  return (
    <div className="mt-12 mb-16 flex flex-col items-center">
      <h3 className="font-serif text-lg font-bold mb-6 text-foreground">Rate This Article</h3>
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <Button
            key={num}
            variant="outline"
            className={`w-10 h-10 rounded-none border-border font-sans font-medium transition-colors ${
              rating === num 
                ? "bg-foreground text-background border-foreground hover:bg-foreground/90 hover:text-background" 
                : "bg-transparent text-foreground hover:bg-muted"
            }`}
            onClick={() => setRating(num)}
          >
            {num}
          </Button>
        ))}
      </div>
      <div className="h-6">
        {rating !== null && (
          <p className="font-sans text-sm italic text-muted-foreground transition-opacity animate-in fade-in">
            {getResponse(rating)}
          </p>
        )}
      </div>
    </div>
  );
}