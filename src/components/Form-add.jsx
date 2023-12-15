import React from "react";
import { useForm } from "../hooks/useForm";

function FormAdd() {
  const { handleChange, handleSubmit, writeComment } = useForm();

  return (
    <form
      className="w-[90%] max-w-lg h-auto max-h-[512px] bg-black text-white p-4 overflow-y-auto overflow-x-hidden rounded mb:overflow-hidden mb:w-[95%]"
      onSubmit={handleSubmit}
    >
      <label htmlFor="comment" className="text-center text-xl">
        Write Your Comment
      </label>
      <textarea
        onChange={handleChange}
        name="comment"
        id="comment-body"
        className="resize-none rounded w-full outline-none text-xl h-[190px] text-black p-2 mb:h-28"
        placeholder="¿Que estas pensando hoy...?"
        value={writeComment}
        maxLength={380}
      ></textarea>

      <button className="bg-indigo-600 py-1 px-4 rounded-md font-semibold text-lg">
        Publicar
      </button>
    </form>
  );
}

export default FormAdd;
