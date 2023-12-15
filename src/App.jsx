import React from "react";
import { CommentProvider } from "./context/comment-context";
import CommentSection from "./components/Comments-section";
import FormAdd from "./components/Form-add";

function App() {
  return (
    <section className="h-screen w-screen bg-gray-300">
      <div className="w-[90%] h-full mx-auto flex justify-center items-center gap-5 mb:flex-col mb:gap-2">
        <CommentProvider>
          <FormAdd />
          <CommentSection />
        </CommentProvider>
      </div>
    </section>
  );
}

export default App;
