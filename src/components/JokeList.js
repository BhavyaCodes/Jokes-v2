import React, { useState, useContext, useEffect } from "react";

import { CategoryContext } from "../contexts/CategoryContext";
import { BlacklistContext } from "../contexts/BlacklistContext";
import jokesApi from "../api/jokesApi";

function JokeList() {
  const [loading, setLoading] = useState(true);
  const [jokes, setJokes] = useState({});
  const { flags } = useContext(BlacklistContext);
  const { categories } = useContext(CategoryContext);

  useEffect(() => {
    const getJokes = async () => {
      let categoryString = "";
      let flagString = "";

      if (categories.all) {
        categoryString = "any";
      } else {
        for (const key in categories) {
          if (categories[key]) {
            categoryString += key.toString() + ",";
          }
        }
        categoryString = categoryString.slice(0, -1);
      }

      for (const key in flags) {
        if (flags[key]) {
          flagString += key.toString() + ",";
        }
      }
      flagString = flagString.slice(0, -1);

      try {
        const response = await jokesApi.get(`/${categoryString}?amount=6`, {
          params: {
            blacklistFlags: flagString || undefined,
            // contains: search || undefined,
          },
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getJokes();
  }, [flags, categories]);
  return <div>{loading ? "loading..." : "Jokes"}</div>;
}

export default JokeList;
