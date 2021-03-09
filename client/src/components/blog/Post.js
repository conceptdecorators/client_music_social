import React from "react";
import marked from "marked";

const Post = ({ article }) => {
  console.log(article);
  const { name, featuredImage, description } = article.fields;
  const postDescription = marked(description);

  return (
    <div className="post-blog">
      <h2 className="title">{name}</h2>
      {featuredImage && (
        <img
          className="featuredImage"
          src={featuredImage.fields.file.url}
          alt={name}
          title={name}
        />
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
