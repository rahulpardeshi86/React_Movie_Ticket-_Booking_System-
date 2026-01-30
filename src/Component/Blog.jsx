import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Series to Binge Watch",
    date: "Jan 10, 2026",
    image: "/images/blogimg1.png",
    excerpt:
      "Discover the most popular series to binge-watch this year. From thrillers to comedies, we cover it all.",
  },
  {
    id: 2,
    title: "The Evolution of Streaming Services",
    date: "Feb 5, 2026",
    image: "/images/blogimg2.webp",
    excerpt:
      "Streaming platforms have changed the way we watch. Learn about their journey and impact on entertainment.",
  },
  {
    id: 3,
    title: "Behind the Scenes of Squid Game",
    date: "Mar 2, 2026",
    image: "/images/blogimg3.png",
    excerpt:
      "Get exclusive insights into the making of Squid Game and how it became a global sensation.",
  },
];

export const Blog = () => {
  return (
    <div className="blog-section">
      <h1>Our Blog</h1>
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <span className="blog-date">{post.date}</span>
              <p>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
