import { useState, useId, useContext } from "react";
import { CommentContext } from '../context/comment-context.jsx'

export function useForm() {
  const { setComments } = useContext(CommentContext);
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

  return { handleChange, handleSubmit, writeComment }
}