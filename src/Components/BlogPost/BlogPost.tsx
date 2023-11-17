// Import the useState hook from React
import { useState } from "react";

// Define the props for the BlogPost component
export type BlogPostProps = {
  title: string;
  initialContent: string;
  additionalContent: string;
  readMore: string;
};

// Define the BlogPost component with React functional component syntax
export default function BlogPost(props: BlogPostProps) {
  // State to track whether additional content should be shown
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  // Function to toggle the state for showing additional content
  const toggleShowAdditionalContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  // Combine initial and additional content based on the state
  const content = showAdditionalContent
    ? props.initialContent + " " + props.additionalContent
    : props.initialContent;

  // Determine the text for the "Read More" button based on the state
  const buttonText = showAdditionalContent ? "Read Less" : props.readMore;

  return (
    // Container for each blog post
    <div>
      {/* Section for displaying the blog post */}
      <section className="blog-post">
        {/* Heading with the title of the blog post */}
        <h2>{props.title}</h2>

        {/* Paragraph with the content of the blog post (with or without additional content) */}
        <p>{content}</p>

        {/* Clickable element to toggle the display of additional content */}
        <p className="read-more" onClick={toggleShowAdditionalContent}>
          {buttonText}
        </p>

        {/* Like button for the blog post */}
        <button className="like-button">Like</button>
      </section>
    </div>
  );
}
