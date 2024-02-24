import { groq } from "next-sanity";

export const postQuery = groq`
*[_type=='post' && slug.current == $slug][0] {
    ...,
    author->,
    topics[]->,    
    "numberOfCharacters": length(pt::text(body)),
  // assumes 5 characters as mean word length
  // https://ux.stackexchange.com/questions/22520/how-long-does-it-take-to-read-x-number-of-characters
    "estimatedWordCount": round(length(pt::text(body)) / 5),
  // Words per minute: 180
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200 )
  
} 
`;

export const postsQuery = groq`
  *[_type=='post'] {
    ...,
    author->,
    topics[]->,
    "numberOfCharacters": length(pt::text(body)),
  // assumes 5 characters as mean word length
  // https://ux.stackexchange.com/questions/22520/how-long-does-it-take-to-read-x-number-of-characters
    "estimatedWordCount": round(length(pt::text(body)) / 5),
  // Words per minute: 180
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200 )
  } | order(_createdAt desc)
`;
