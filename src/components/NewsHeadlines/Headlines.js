import React, { useState, useEffect } from "react";
import SingleHeadline from "./SingleHeadline";
import axios from "axios";

function Headline() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=c10ecdc1d6a047e49705ed2703134520"
      )
      .then((res) => {
        // console.log(res);
        let articles = res.data.articles;
        setPost(articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SingleHeadline articles={post} />
    </>
  );
}

export default Headline;
