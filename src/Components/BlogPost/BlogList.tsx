// Import necessary components
import BlogPost from "./BlogPost";
import LoadingStatus from "./LoadingStatus";
import ErrorDisplay from "./ErrorDisplay";

// Define the props for the BlogList component
type BlogListProps = {
  blogText: BlogPostInfo[];
  loading: boolean;
  error: string | null;
};

// Define the structure of a BlogPostInfo object
export type BlogPostInfo = {
  id: number;
  title: string;
  content: string;
  additionalContent: string;
};

// Define the BlogList component with React functional component syntax
export default function BlogList({ blogText, loading, error }: BlogListProps) {
  return (
    // Main container for the BlogList component
    <main>
      {/* Main heading for the blog list */}
      <h1>Kitty Central</h1>

      {/* LoadingStatus component to display loading status */}
      <LoadingStatus loading={loading} />

      {/* ErrorDisplay component to display error message if present */}
      <ErrorDisplay error={error} />

      {/* Map through each blog post and render the BlogPost component */}
      {blogText.map((post) => (
        // Container for each blog post with a unique key and styling
        <div key={post.id} className="blog-post-container">
          {/* BlogPost component to display individual blog post */}
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
