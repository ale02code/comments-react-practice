import React, { useState, useId } from "react";
import FetchingPostsAPI from "./services/fetch";

function App() {
  const { comments, setComments } = FetchingPostsAPI();
  const [writeComment, setWriteComment] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setWriteComment(value);
  };

  const id = useId();
  const user = undefined;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (writeComment !== "") {
      setComments((prevState) => [
        ...prevState,

        {
          id: id,
          email: user || "unknown@xxx.com",
          body: writeComment,
        },
      ]);
    }

    setWriteComment("");
  };

  return (
    <section className="h-screen w-screen bg-gray-300">
      <div className="w-[90%] h-full mx-auto flex justify-center items-center gap-5">
        <form
          className="w-[90%] max-w-lg h-auto max-h-[512px] bg-black text-white p-4 overflow-y-auto overflow-x-hidden rounded"
          onSubmit={handleSubmit}
        >
          <label htmlFor="comment" className="text-center text-xl">
            Write Your Comment
          </label>
          <textarea
            onChange={handleChange}
            name="comment"
            id="comment-body"
            className="resize-none rounded w-full outline-none text-xl h-[190px] text-black p-2"
            placeholder="¿Que estas pensando hoy...?"
            value={writeComment}
          ></textarea>
          <button className="bg-indigo-600 py-1 px-4 rounded-md font-semibold text-lg">
            Publicar
          </button>
        </form>

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
      </div>
    </section>
  );
}

export default App;
