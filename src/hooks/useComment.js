import { useContext } from 'react';
import { CommentContext } from '../context/comment-context.jsx';

export function useComment() {
  const { comments, setComments } = useContext(CommentContext);

  const handleRemoveComment = (currentCommentId) => {
    const filteredComments = comments.filter(item => item.id !== currentCommentId);
    setComments(filteredComments);
  };

  return { comments, handleRemoveComment };
}
