import React, { useState, useEffect } from 'react';
import './ReviewPage.css';

function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  const fetchReviews = async () => {
    const res = await fetch('https://hesita-design.onrender.com/api/reviews');
    const data = await res.json();
    setReviews(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://hesita-design.onrender.com/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, text }),
    });
    setText('');
    fetchReviews();
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="review-page">
      <h2>Enter your Reviews about us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit Review</button>

        {/* Book Now button placed below submit button */}
        <button
          type="button"
          className="booking-button"
          onClick={() => window.location.href = '/booking'}
        >
          Book Now
        </button>
      </form>

      <div className="all-reviews">
        <h3>All Reviews about us</h3>
        {reviews.map((review) => (
          <div key={review._id} className="review-card">
            <strong>{review.username}</strong>
            <p>{review.text}</p>
            <small>{new Date(review.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewPage;
