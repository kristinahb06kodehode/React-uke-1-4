type description = {
  data: { name: string; date: string; title: string; mainText: string };
};

export default function TextContent(parameter: description) {
  return (
    <div>
      <h3>{parameter.data.title}</h3>
      <p className="text-content">{parameter.data.mainText}</p>
      <p className="readMore">Read more...</p>
    </div>
  );
}
