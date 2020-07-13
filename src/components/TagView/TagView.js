import React from "react";
import "./TagView.scss";

const TagView = ({ click }) => {
  const tags = ["note", "family", "work", "school", "friend", "holiday"];
  return (
    <div className="TagView">
      <div className="tag-container">
        <h1>Choose Tags</h1>
        {tags.map((tag, i) => (
          <p key={i} className={`tag tag-${i + 1}`} onClick={click}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TagView;
