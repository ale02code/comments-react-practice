import React, { useContext } from "react";
import { CommentContext } from "../context/comment-context";

function CommentsSection() {
  const { comments } = useContext(CommentContext);

  return (
    <div className="w-[90%] max-w-lg h-[90%] max-h-[512px] bg-black text-white p-4 overflow-y-auto overflow-x-hidden rounded">
      <h1 className="text-center text-2xl mb-5 font-semibold underline">
        Comments
      </h1>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="w-full h-auto bg-zinc-500 p-2 rounded-md mb-4"
        >
          <strong className="text-lg">{comment.email}</strong>
          <h2>{comment.title}</h2>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsSection;
