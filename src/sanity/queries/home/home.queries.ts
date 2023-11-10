import groq from "groq";

export const topicsQuery = groq`
*[_type=='topic'] {
  title,
  slug
 }[0..9]
`;
