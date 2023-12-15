import React from "react";
import { useComment } from "../hooks/usecomment";
import RemoveIcon from "../assets/removeIcon.svg";
import LikeIcon from "../assets/likeIcon.svg";

function CommentsSection() {
  const { handleRemoveComment, comments } = useComment();

  return (
    <div className="w-[90%] max-w-lg h-[90%] max-h-[512px] bg-black text-white p-4 overflow-y-auto overflow-x-hidden rounded mb:h-96 mb:w-[95%]">
      <h1 className="text-center text-2xl mb-5 font-semibold underline">
        Comments
      </h1>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="w-full h-auto bg-zinc-500 rounded-md mb-4 overflow-hidden"
        >
          <div className="p-2 mb-1">
            <strong className="text-lg">{comment.email}</strong>
            <h2>{comment.title}</h2>
            <p className="block whitespace-wrap">{comment.body}</p>
          </div>
          <footer className="w-full h-12 border-t border-gray-400 flex items-end justify-center">
            <div className="bg-gray-600 flex justify-around items-center h-[70%] w-full rounded-b-md">
              <img
                src={LikeIcon}
                alt="LikeIcon"
                className="h-6 hover:cursor-pointer"
                draggable="false"
              />
              <img
                src={RemoveIcon}
                alt="Remove Comment"
                className="h-6 hover:cursor-pointer"
                onClick={() => handleRemoveComment(comment.id)}
                draggable="false"
              />
            </div>
          </footer>
        </div>
      ))}
    </div>
  );
}

export default CommentsSection;
