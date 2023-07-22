import React, { useState } from 'react';
import './TeamPage.css';

function TeamPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="team-page">
      <div className="team-section">
        <h2 className="section-title">Your Organization T1 - T2</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="#" alt="Member 1" className="member-avatar" />
            <span className="member-name">Member 1</span>
          </div>
          <div className="team-member">
            <img src="#" alt="Member 2" className="member-avatar" />
            <span className="member-name">Member 2</span>
          </div>
          <div className="team-member">
            <img src="#" alt="Member 3" className="member-avatar" />
            <span className="member-name">Member 3</span>
          </div>
          <div className="team-member">
            <img src="#" alt="Member 4" className="member-avatar" />
            <span className="member-name">Member 4</span>
          </div>
          <div className="team-member">
            <img src="#" alt="Member 5" className="member-avatar" />
            <span className="member-name">Member 5</span>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h2 className="section-title">Team Chat</h2>
        <div className="team-chat">
          <div className="message-inbox">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                {msg}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="message-form">
            <input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="team-section">
        <h2 className="section-title">Team Announcement</h2>
        <div className="team-announcement">
          {}
          <p>Team practice will be held on Friday at 5 PM.</p>
          <p>Good luck to all team members in the upcoming tournament!</p>
          <p>Team jerseys will be distributed next week.</p>
        </div>
      </div>

      <div className="team-section team-scheduler">
        <h2 className="section-title">Scheduler</h2>
        <div className="team-calendar">
          {}
          {}
        </div>
      </div>

      <div className="team-section">
        <h2 className="section-title">Reviews</h2>
        <div className="team-reviews">
          {}
          <p>Great teamwork and communication in the last match!</p>
          <p>One of the best teams I've played with. Highly recommended!</p>
          <p>Team members are skilled and friendly.</p>
        </div>
      </div>

      <div className="team-section">
        <h2 className="section-title">Highlights</h2>
        <div className="team-highlights">
          {}
          <p>Team won the championship trophy in the regional tournament.</p>
          <p>Amazing comeback in a close match against strong opponents.</p>
          <p>Team captain achieved a new personal best rank.</p>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
