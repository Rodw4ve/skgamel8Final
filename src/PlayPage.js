import React, { useState } from 'react';
import './PlayPage.css';

function PlayPage() {
  const [showGameList, setShowGameList] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const toggleGameList = () => {
    setShowGameList(!showGameList);
  };

  const gamesData = [
    { id: 1, name: 'CSGO', description: 'Counter-Strike Global Offensive is a 5v5 terrorist versus counter terrorist game.' },
    { id: 2, name: 'VALORANT', description: 'Valorant is a game created by riot games where overawatch and csgo meet' },
    { id: 3, name: 'RAINBOW6', description: 'Rainbow 6 siege is a wonderful game with a search and destroy premise' },

  ];

  const recommendedHubsData = [
    { id: 1, name: 'LEETIFY', description: 'LEETIFY GROUP IS NUMBER 1 RANKED' },
    {
      id: 2,
      name: 'GGTOOEZ',
      description: 'GG TOO EZ DONT EVEN STRESS IT WE THE BEST',
      featuredGame: 'VALORANT',
      playersOnline: 500, //
      website: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/',
    },
    {
      id: 3,
      name: 'WaterMelon3lite',
      description: 'smoking watermelons are what we pray to acheive.',
      featuredGame: 'CSGO', 
      playersOnline: 1000, 
      website: 'https://playvalorant.com/', 
    },
  
  ];

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  return (
    <div className="play-page">
      <div className="sidebar">
        <div className="game-select-column">
          <button
            className={`game-select-button ${showGameList ? 'active' : ''}`}
            onClick={toggleGameList}
          >
            Game Select ▾
          </button>
          {showGameList && (
            <ul className="game-list">
              {gamesData.map((game) => (
                <li key={game.id} onClick={() => handleGameSelect(game)}>
                  {game.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className="sidebar-menu">
          <li>
            <button className="sidebar-button active">Dashboard</button>
          </li>
          <li>
            <button className="sidebar-button">Matchmaking</button>
          </li>
          <li>
            <button className="sidebar-button">Tournaments</button>
          </li>
          <li>
            <button className="sidebar-button">Hubs</button>
          </li>
          <li>
            <button className="sidebar-button">Teams</button>
          </li>
        </ul>
      </div>
      <div className="content">
        <ul className="overview-menu">
          <li>
            <button className="overview-button active">Overview</button>
          </li>
          <li>
            <button className="overview-button">Competitions</button>
          </li>
          <li>
            <button className="overview-button">Matches</button>
          </li>
          <li>
            <button className="overview-button">Media</button>
          </li>
          <li>
            <button className="overview-button">Rankings</button>
          </li>
        </ul>
        <div className="gamemode-container">
          <h3>Choose Gamemode:</h3>
          <ul className="gamemode-options">
            <li>5v5</li>
            <li>2v2</li>
            <li>1v1</li>
          </ul>
        </div>
        <div className="hubs-container">
          <h3>Recommend Hubs:</h3>
          <ul className="recommended-hubs">
            {recommendedHubsData.map((hub) => (
              <li key={hub.id}>
                <h4>{hub.name}</h4>
                <p>{hub.description}</p>
                {hub.featuredGame && (
                  <p>Featured Game: {hub.featuredGame}</p>
                )}
                {hub.playersOnline && (
                  <p>Players Online: {hub.playersOnline}</p>
                )}
                {hub.website && (
                  <p>
                    <a href={hub.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="featured-hub-container">
          {selectedGame ? (
            <>
              <h1>{selectedGame.name}</h1>
              <p>{selectedGame.description}</p>
              {}
            </>
          ) : (
            <h1>Time is your control on speed</h1>
          )}
          {}
        </div>
      </div>
    </div>
  );
}

export default PlayPage;
