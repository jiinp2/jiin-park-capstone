import "./CommentSection.scss";

function CommentSection({ filePath, imageComments, setImageComments }) {
  const handleCommentChange = (e) => {
    setImageComments((prevComments) => ({
      ...prevComments,
      [filePath]: e.target.value,
    }));
  };

  return (
    <div className="comment-section">
      <textarea
        value={imageComments[filePath] || ""}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
      />
    </div>
  );
}

export default CommentSection;
