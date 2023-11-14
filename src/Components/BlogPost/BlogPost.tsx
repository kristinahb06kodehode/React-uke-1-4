import { useState } from "react";
import Avatar from "./Avatar";

export type BlogPostProps = {
  title: string;
  initialContent: string;
  additionalContent: string;
  readMore: string;
};

export default function BlogPost(props: BlogPostProps) {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const toggleShowAdditionalContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  const content = showAdditionalContent
    ? props.initialContent + " " + props.additionalContent
    : props.initialContent;

  const buttonText = showAdditionalContent ? "Read Less" : props.readMore;

  return (
    <div>
      <section className="blog-post">
        <h2>{props.title}</h2>
        <Avatar
          size={95}
          blogPostData={{
            id: 1,
            title: props.title,
            content: props.initialContent,
            additionalContent: props.additionalContent,
          }}
        />
        <p>{content}</p>
        <p className="read-more" onClick={toggleShowAdditionalContent}>
          {buttonText}
        </p>
        <button className="like-button">Like</button>
      </section>
    </div>
  );
}
