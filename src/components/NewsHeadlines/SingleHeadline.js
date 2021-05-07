import React from "react";
import "./style.css";

function SingleHeadline({ articles }) {
  console.log(articles);

  return (
    <div className="container-fluid">
      <div className="wrapper">
        {/* <div className="col-sm"></div> */}
        {articles.map((post, key) => (
          <div className="box" key={key}>
            <a href={post.url}>
              <img src={post.urlToImage} />
            </a>
            <a href={post.url}>{post.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleHeadline;
