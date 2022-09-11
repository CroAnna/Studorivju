import React from "react";
import { useParams } from "react-router-dom";

const HomePage = () => {
  let { postId } = useParams();

  return <div>HomePage {postId} !</div>;
};

export default HomePage;
