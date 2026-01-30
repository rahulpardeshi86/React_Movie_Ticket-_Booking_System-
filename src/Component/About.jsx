import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-section">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to our Movie Ticket Booking System - a Netflix-style
          entertainment platform where users can explore movies, check
          details, and book tickets easily. Our goal is to provide a smooth,
          fast, and user-friendly booking experience.
        </p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>How Booking Works</h2>
          <p>
             1. Select a movie from the list <br />
            2. Click on “Book Ticket” <br />
            3. Enter your name and number of seats <br />
            4. Choose date and show time <br />
            5. Confirm booking and view total price instantly
          </p>
        </div>

        <div className="about-card">
          <h2>Key Features</h2>
          <p>
              • Netflix-style modern UI <br />
            • Real-time price calculation <br />
            • Date & time validation <br />
            • Responsive design <br />
            • Simple and fast booking process
          </p>
        </div>

        <div className="about-card">
          <h2>User Benefits</h2>
          <p>
            Our platform saves time by eliminating long queues and makes
            movie booking effortless with a clean interface and instant
            confirmation.
          </p>
        </div>
      </div>
    </div>
  );
};
