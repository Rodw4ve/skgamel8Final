import React, { useState } from 'react';
import './CreatePartyPage.css';

function CreatePartyPage() {
  const [team1Name, setTeam1Name] = useState('');
  const [team1Members, setTeam1Members] = useState([]);
  const [team2Name, setTeam2Name] = useState('');
  const [team2Members, setTeam2Members] = useState([]);
  const [team1MemberName, setTeam1MemberName] = useState('');
  const [team2MemberName, setTeam2MemberName] = useState('');
  const [showTeams, setShowTeams] = useState(false);

  const handleTeam1NameChange = (e) => {
    setTeam1Name(e.target.value);
  };

  const handleTeam1MemberChange = (e) => {
    setTeam1MemberName(e.target.value);
  };

  const addTeam1Member = () => {
    if (team1MemberName.trim() !== '' && team1Members.length < 5) {
      setTeam1Members([...team1Members, team1MemberName]);
      setTeam1MemberName('');
    }
  };

  const removeTeam1Member = (index) => {
    const updatedMembers = [...team1Members];
    updatedMembers.splice(index, 1);
    setTeam1Members(updatedMembers);
  };

  const handleTeam2NameChange = (e) => {
    setTeam2Name(e.target.value);
  };

  const handleTeam2MemberChange = (e) => {
    setTeam2MemberName(e.target.value);
  };

  const addTeam2Member = () => {
    if (team2MemberName.trim() !== '' && team2Members.length < 5) {
      setTeam2Members([...team2Members, team2MemberName]);
      setTeam2MemberName('');
    }
  };

  const removeTeam2Member = (index) => {
    const updatedMembers = [...team2Members];
    updatedMembers.splice(index, 1);
    setTeam2Members(updatedMembers);
  };

  const createTeam = () => {
    if (team1Members.length !== 5 || team2Members.length !== 5) {
      alert('Error: Need 5 people per team before creating teams');
    } else {
      setShowTeams(true);
    }
  };

  return (
    <div className="create-party-page">
      <h1>Create a New Party</h1>
      <div className="team">
        <h2>Team 1</h2>
        <div className="team-name">
          <label>Team Name:</label>
          <input type="text" value={team1Name} onChange={handleTeam1NameChange} />
        </div>
        <div className="team-members">
          <label>Team Members:</label>
          <div className="members-list">
            {team1Members.map((member, index) => (
              <div key={index} className="member-item">
                {member}
                <button className="remove-button" onClick={() => removeTeam1Member(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="add-member">
            <input type="text" value={team1MemberName} onChange={handleTeam1MemberChange} placeholder="Enter member name" />
            <button className="add-button" onClick={addTeam1Member}>
              Add Member
            </button>
          </div>
        </div>
      </div>
      <div className="team">
        <h2>Team 2</h2>
        <div className="team-name">
          <label>Team Name:</label>
          <input type="text" value={team2Name} onChange={handleTeam2NameChange} />
        </div>
        <div className="team-members">
          <label>Team Members:</label>
          <div className="members-list">
            {team2Members.map((member, index) => (
              <div key={index} className="member-item">
                {member}
                <button className="remove-button" onClick={() => removeTeam2Member(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="add-member">
            <input type="text" value={team2MemberName} onChange={handleTeam2MemberChange} placeholder="Enter member name" />
            <button className="add-button" onClick={addTeam2Member}>
              Add Member
            </button>
          </div>
        </div>
      </div>
      {(team1Name || team2Name) && (team1Members.length > 0 || team2Members.length > 0) && !showTeams && (
        <div className="create-team-button">
          <button className="create-button" onClick={createTeam}>
            Create Teams
          </button>
        </div>
      )}

      {showTeams && (
        <div className="teams-summary">
          <h2>Teams Summary</h2>
          <div className="team-summary">
            <h3>Team 1: {team1Name}</h3>
            <ul>
              {team1Members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
          <div className="team-summary">
            <h3>Team 2: {team2Name}</h3>
            <ul>
              {team2Members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
          <button className="back-button" onClick={() => setShowTeams(false)}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default CreatePartyPage;
