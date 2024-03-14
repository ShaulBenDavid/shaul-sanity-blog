import { groq } from "next-sanity";

export const allTopicsQuery = groq`
*[_type=='topic']{
    ...,
} 
`;
