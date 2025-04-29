export default function ProductComment({ commentData }) {
  const handleCommentRating = () => {
    const rating = commentData?.rating;
    let stars = "";

    for (let i = 0; i < rating; i++) {
      stars += "★";
    }
    return stars;
  };

  return (
    <div className="product-comment">
      <p className="commenter-name">{commentData?.reviewerName}</p>
      <p className="commenter-email">{commentData?.reviewerEmail}</p>
      <p className="commenter-rating">{handleCommentRating()}</p>
      <p className="commenter-review">{commentData?.comment}</p>
      <p className="comment-date">{commentData?.date}</p>
    </div>
  );
}
