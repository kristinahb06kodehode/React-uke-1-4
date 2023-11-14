import BlogPost from "./BlogPost";
import LoadingStatus from "./LoadingStatus";
import ErrorDisplay from "./ErrorDisplay";

type BlogListProps = {
  blogText: BlogPostInfo[];
  loading: boolean;
  error: string | null;
};

export type BlogPostInfo = {
  id: number;
  title: string;
  content: string;
  additionalContent: string;
};

export default function BlogList({ blogText, loading, error }: BlogListProps) {
  return (
    <main>
      <h1>Kitty Central</h1>

      <LoadingStatus loading={loading} />

      <ErrorDisplay error={error} />

      {blogText.map((post) => (
        <div key={post.id} className="blog-post-container">
          <BlogPost
            title={post.title}
            initialContent={post.content}
            additionalContent={post.additionalContent}
            readMore="Read More..."
          />
        </div>
      ))}
    </main>
  );
}
