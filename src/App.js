import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import './App.css';
import Navbar from './Navbar';
import PlayPage from './PlayPage';
import SupportPage from './SupportPage';
import TeamPage from './TeamPage';
import ShopPage from './ShopPage';
import CreatePartyPage from './CreatePartyPage';
import FriendsPage from './FriendsPage';
import ProfilePage from './ProfilePage';
import i18n from './i18n';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Home: 'Home',
        Play: 'Play',
        Team: 'Teams',
        Shop: 'Shop',
        Party: 'Create Party',
        Friend: 'Friends',
        Support: 'Support',
        Profile: 'Profile',
        overview: "Overview",
        stats: "Stats",
        posts: "Posts",
        videos: "Videos",
        friends: "Friends",
        following: "Following",
        gamesPlayed: "Games Played:",
        winRate: "Win Rate:",
        highestRank: "Highest Rank:",
        totalFriends: "Total Friends:",
        rankings: "Rankings",
        winrate: "Winrate",
        matches: "Matches",
        achievements: "Achievements",
        about: "About",
        socials: "Socials",
        feed: "Feed",
        aboutMe: "About Me: I am a passionate gamer who loves playing all kinds of games.",
        connectSocials: "Connect with me on social media:",
        recentActivity: "Recent activity and posts:",
        matchResult: "Just won an intense 5v5 match!",
        sharedVideo: "Shared a new gameplay video. Check it out!",
        share: "Share",
        top10: 'Top 10 in the Leaderboard',
        recentmatch: 'Recent Match Results',
        achievementscore: 'Unlocked 30 Achievements',
        location: 'New York, USA',
        hours: '2 hours ago',
        days: '1 day ago',

}
    },
    fr: {
      translation: {
        Home: 'Maison',
        Play: 'Jouer',
        Team: 'Équipes',
        Shop: 'Boutique',
        Party: 'Création De Groupes',
        Friend: 'Amis',
        Support: 'Soutien',
        Profile: 'Profil',
        overview: "Vue d'ensemble",
        stats: "Statistiques",
        posts: "Publications",
        videos: "Vidéos",
        friends: "Amis",
        following: "Abonnements",
        gamesPlayed: "Parties jouées :",
        winRate: "Taux de victoire :",
        highestRank: "Rang le plus élevé :",
        totalFriends: "Amis au total :",
        rankings: "Classements",
        winrate: "Taux de victoire",
        matches: "Parties",
        achievements: "Succès",
        about: "À propos",
        socials: "Réseaux sociaux",
        feed: "Fil d'actualités",
        aboutMe: "À propos de moi : Je suis un joueur passionné qui aime jouer à toutes sortes de jeux.",
        connectSocials: "Connectez-vous avec moi sur les réseaux sociaux :",
        recentActivity: "Activité récente et publications :",
        matchResult: "Je viens de gagner un match 5v5 intense !",
        sharedVideo: "Partagé une nouvelle vidéo de gameplay. Regardez ça !",
        share: 'partager',
        top10: 'Les 10 premiers du classement',
        recentmatch: 'Résultats des derniers matches',
        achievementscore: '30 accomplissements débloqués',
        location: 'New York, États-Unis',
        hours: 'Il y a 2 heures',
        days: 'il y a 1 jour',
}
    }
  },
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

function Home() {
  const [showOnlineFriends, setShowOnlineFriends] = useState(false);
  const [showFeedForums, setShowFeedForums] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleOnlineFriends = () => {
    setShowOnlineFriends(!showOnlineFriends);
  };

  const toggleFeedForums = () => {
    setShowFeedForums(!showFeedForums);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="home-page">
      <h1 className="home-title">YOUR LEADING<br />COMPETITIVE GAMING PLATFORM</h1>
      <div className="home-content">
        <div className="column-block-left" onClick={toggleOnlineFriends}>
          <h2>Online Friends</h2>
          <i className="fas fa-user-friends"></i>
          {showOnlineFriends && (
            <div className="dropdown-content">
              John.
            </div>
          )}
        </div>
        <div className="column-block-left" onClick={toggleFeedForums}>
          <h2>Feed Forum's</h2>
          <i className="fas fa-comment-alt"></i>
          {showFeedForums && (
            <div className="dropdown-content">
              Jenna posted 3 hours ago.
            </div>
          )}
        </div>
        <div className="column-block-left" onClick={toggleNotifications}>
          <h2>Notifications</h2>
          <i className="fas fa-bell"></i>
          {showNotifications && (
            <div className="dropdown-content">
              You have zero notifications .
            </div>
          )}
        </div>
      </div>
      <div className="home-buttons">
        <a className="home-button" alt="/create-account">CREATE AN ACCOUNT</a>
        <a className="home-button" alt="/download-windows">DOWNLOAD FOR WINDOWS</a>
      </div>
      <div className="home-icons">
        <div className="home-icon"> 
          <img src="src\profilepic.jpg" alt="Coaching Icon" />
          <h3>COACHING</h3>
          <p>Coaching is unlocking a person's potential to maximize their growth.</p>
        </div>
        <div className="home-icon">

          <img src="src\profilepic.jpg" alt="Skill Progression Icon" />
          <h3>SKILL PROGRESSION</h3>
          <p>Track your stats as you climb the ranks.</p>
        </div>
        <div className="home-icon">

          <img src="src\profilepic.jpg" alt="Tournaments Icon" />
          <h3>TOURNAMENTS</h3>
          <p>Compete for real prizes with friends and other players.</p>
        </div>
      </div>
      <a className="anti-cheat-button" href="/shop">Go to Shop</a>


      <div className="home-featured-games">
        <h2>Featured Games</h2>
      </div>
      <div className="home-updates">
        <h2>Latest Updates</h2>
      </div>
      <div className="home-partners">
        <h2>Our Partners</h2>
      </div>
      <div className="home-testimonials">
        <h2>Testimonials</h2>
      </div>
      <div className="home-cta">
        <h2>Ready to Level Up?</h2>
      </div>

      <div className="home-page-boxes">
        <div className="nice-box">
          <i className="nice-box-icon fas fa-gift"></i>
          <h3>Special Offer</h3>
          <p>Get 50% off on your first purchase!</p>
        </div>
        <div className="nice-box">
          <i className="nice-box-icon fas fa-star"></i>
          <h3>Exclusive Rewards</h3>
          <p>Unlock exclusive rewards by playing featured games.</p>
        </div>
        <div className="nice-box">
          <i className="nice-box-icon fas fa-trophy"></i>
          <h3>Tournament Winners</h3>
          <p>Congratulations to our recent tournament winners!</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <I18nextProvider>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play/*" element={<PlayPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/create-party" element={<CreatePartyPage />} />
          <Route path="/friends" element={<FriendsPage />} />
        </Routes>
      </div>
    </Router>
    </I18nextProvider>
  );
}

export default App;