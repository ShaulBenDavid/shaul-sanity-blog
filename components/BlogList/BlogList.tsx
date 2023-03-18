import Image from "next/image";
import forUrl from "@/lib/urlFor";
import category from "@/schemas/category";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} style={{ backgroundColor: "lightblue" }}>
          <h2>{post.title}</h2>
          <h3>{post._createdAt}</h3>
          <p>{post.author.name}</p>
          <div style={{ width: "80px", height: "80px", position: "relative" }}>
            <Image
              src={forUrl(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <div>
            {post.categories.map((category) => (
              <span key={category._id}>{category.title}</span>
            ))}
          </div>

          <div>
            <p>{post.body[0].children[0].text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
