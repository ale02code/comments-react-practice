import React, { useEffect, useState } from "react"

const API_URL = "https://jsonplaceholder.typicode.com/comments"

function PostsFetching() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const sliceData = data.slice(0, 4);
        setComments(sliceData);
      })
  }, [])

  return { comments, setComments };
}

export default PostsFetching;