import type { Post } from "@/src/sanity/types";

export interface PostPageResponse extends Post {
  estimatedWordCount: number;
  estimatedReadingTime: number;
  numberOfCharacters: number;
}
