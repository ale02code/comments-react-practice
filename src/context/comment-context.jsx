import React, { createContext } from "react";
import FetchingCommentsAPI from "../services/fetch";

export const CommentContext = createContext();

export function CommentProvider({ children }) {
  const { comments, setComments } = FetchingCommentsAPI();

  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentContext.Provider>
  );
}
