import React from "react";
import marked from "marked";

const Post = ({ article }) => {
  console.log(article);
  const { name, featuredImage, description } = article.fields;
  const postDescription = marked(description);
  const { url, contentType, fileName } =
    (featuredImage && featuredImage.fields.file) || {};

  console.log(featuredImage);

  return (
    <div className="post-blog">
      <h2 className="title">{name}</h2>
      {url && contentType === "image/jpeg" ? (
        <img
          className="featuredImage"
          src={featuredImage.fields.file.url}
          alt={name}
          title={name}
        />
      ) : (
        <iframe
          type="text/html"
          src={`https://www.youtube.com/embed/${
            fileName.split("=")[fileName.split("=").length - 1]
          }`}
          style={{
            border: "none",
            width: "100%",
            height: "650px",
          }}
        ></iframe>
      )}
      <section
        style={{
          color: "black",
          fontWeight: "600",
        }}
        dangerouslySetInnerHTML={{ __html: postDescription }}
      />
    </div>
  );
};

export default Post;
