import React, { useState } from 'react';
import './FriendsPage.css';

function FriendsPage() {

  const friendsList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alex Johnson' },
  ];
  
  const friendRequests = [
    { id: 4, name: 'Kate Johnson' },
    { id: 5, name: 'Mike Smith' },
  ];

  const notifications = [
    { id: 1, message: 'You have a new friend request from Kate Johnson' },
    { id: 2, message: 'Mike Smith accepted your friend request' },
  ];

  const [selectedFriend, setSelectedFriend] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showFriendRequests, setShowFriendRequests] = useState(false);

  const handleFriendSelection = (friendId) => {
    setSelectedFriend(friendId);
  };

  const handleSendMessage = () => {
    if (selectedFriend && newMessage.trim() !== '') {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'You', message: newMessage },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="friends-page">
      <h1 className="friends-title">Friends</h1>
      <div className="friends-grid">
        {friendsList.map((friend) => (
          <div
            key={friend.id}
            className={`friend-card ${selectedFriend === friend.id ? 'selected' : ''}`}
            onClick={() => handleFriendSelection(friend.id)}
          >
            <img src="#" alt={`Profile of ${friend.name}`} className="friend-avatar" />
            <h3 className="friend-name">{friend.name}</h3>
            <p className="friend-status">Online</p>
            <div className="friend-actions">
              <button className="friend-action-button">Message</button>
              <button className="friend-action-button">Invite to Game</button>
            </div>
          </div>
        ))}
      </div>
      {selectedFriend && (
        <div className="friends-chat">
          <div className="chat-header">
            <h3>{friendsList.find((friend) => friend.id === selectedFriend)?.name}</h3>
          </div>
          <div className="chat-messages">
            {chatMessages.map((message, index) => (
              <div key={index} className={`chat-message ${message.sender === 'You' ? 'outgoing' : 'incoming'}`}>
                <p>{message.message}</p>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className="send-button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
      <div className="friends-section">
        <h2>Friend Requests</h2>
        <div className="friend-requests">
          {friendRequests.map((request) => (
            <div key={request.id} className="friend-request">
              <p>
                {request.name} sent you a friend request.
                <button className="accept-button">Accept</button>
                <button className="decline-button">Decline</button>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="friends-section">
        <h2>Notifications</h2>
        <div className="notifications">
          {notifications.map((notification) => (
            <div key={notification.id} className="notification">
              <p>{notification.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FriendsPage;
