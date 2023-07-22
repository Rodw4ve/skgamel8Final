import React from 'react';
import './SupportPage.css';

function SupportPage() {
  return (
    <div className="support-page">
      <h1>Support Page</h1>
      <div className="support-content">
        <div className="support-header">
          <h2>How can we help?</h2>
          <label htmlFor="searchInput">Search</label>
          <input type="text" id="searchInput" placeholder="Search" />
        </div>
        <div className="support-buttons">
          <div className="support-row">
            <button>Account Management</button>
            <button>Game Registration</button>
            <button>Anti Cheat</button>
          </div>
          <div className="support-row">
            <button>Technical Issues</button>
            <button>Community Moderation</button>
            <button>Subscription + Shop</button>
          </div>
        </div>
        <div className="support-articles">
          <h2>Popular Articles</h2>
          <ul className="article-list">
            <li>How to reset your password</li>
            <li>Common technical issues and solutions</li>
            <li>Managing your subscription</li>
            <li>How to report abusive behavior</li>
            <li>Understanding our anti-cheat policy</li>
            <li>Guide to setting up two-factor authentication</li>
            <li>How to change your username</li>
            {}
          </ul>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: support@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Working Hours: Mon-Fri, 9 AM - 5 PM</p>
        </div>
        <div className="promoted-articles">
          <h2>Promoted Articles / News</h2>
          <ul className="article-list">
            <li>New game update: Patch notes</li>
            <li>Community event: Join the fun!</li>
            <li>How to participate in tournaments</li>
            <li>Exclusive merchandise now available</li>
            <li>Upcoming game features sneak peek</li>
            {}
          </ul>
        </div>
        <div className="customer-feedback">
          <h2>Customer Feedback</h2>
          {}
        </div>
        <div className="support-faq">
          <h2>Frequently Asked Questions</h2>
          {}
          <ul className="faq-list">
            <li>How do I change my in-game settings?</li>
            <li>What are the system requirements for the game?</li>
            <li>How do I contact support for account issues?</li>
            <li>Can I transfer my progress to another device?</li>
            <li>How can I request a refund for a purchase?</li>
            {}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
