import React, { useEffect, useState } from 'react';
import '../Components/shopstyles.css';

const SocialFeed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const fakeTweets = [
        { id: 1, content: "tweet 1", user: "@nikhilhathwar @ 00:00:00 on 12/31/2024" },
        { id: 2, content: "tweet 1", user: "@nikhilhathwar @ 00:00:00 on 12/31/2024" },
        { id: 3, content: "tweet 1", user: "@nikhilhathwar @ 00:00:00 on 12/31/2024" },
      ];
      setTweets(fakeTweets);
    };
    fetchTweets();
  }, []);

  return (
    <div className="social-feed">
      <h2>Social Media Feed</h2>
      {tweets.map((tweet) => (
        <div className="tweet-card" key={tweet.id}>
          <p><strong>{tweet.user}</strong></p>
          <p>{tweet.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialFeed;
