import React, { useState } from "react";

function JokeList() {
  const [loading, setLoading] = useState(true);

  console.log(loading);
  return <div>{loading ? "loading..." : "Jokes"}</div>;
}

export default JokeList;
