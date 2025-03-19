import "./CommentSection.scss";

function CommentSection({ filePath, imageComments, setImageComments }) {
  const handleCommentChange = (e) => {
    setImageComments((prevComments) => ({
      ...prevComments,
      [filePath]: e.target.value,
    }));
  };

  return (
    <div>
      <textarea
        value={imageComments[filePath] || ""}
        onChange={handleCommentChange}
        placeholder="Add a comment for this photo..."
      />
    </div>
  );
}

export default CommentSection;
