import { useState, useEffect } from "react";

export function usePostTitle() {

    const [post, setPost] = useState({});

  async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const json = await response.json();
    setPost(json);
  }

  useEffect(function () {
    getPost();
  }, []);


  return post.title;

}