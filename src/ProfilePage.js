import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProfilePage.css';

function ProfilePage() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
    

    localStorage.setItem('lang', i18n.language);
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-picture-box">
          <div className="profile-picture">
            <img
              className="profile-picture-img"
              src="path/to/profile-picture.jpg"
              alt="Profile Picture"
            />
            <div className="profile-picture-overlay">
              {}
              <span className="upload-icon">+</span>
              <span className="remove-icon">x</span>
            </div>
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-name">John Doe</div>
          <div className="profile-location">{t('location')}</div>
          <button className="share-button">{t('share')}</button>
        </div>
      </div>

      <div className="profile-navigation">
        <button className="nav-button active">{t('overview')}</button>
        <button className="nav-button">{t('stats')}</button>
        <button className="nav-button">{t('posts')}</button>
        <button className="nav-button">{t('videos')}</button>
        <button className="nav-button">{t('friends')}</button>
        <button className="nav-button">{t('following')}</button>
      </div>

      <div className="profile-stats">
        <div className="stats-item">
          <span className="stats-label">{t('gamesPlayed')}</span>
          <span className="stats-value">123</span>
        </div>
        <div className="stats-item">
          <span className="stats-label">{t('winRate')}</span>
          <span className="stats-value">67%</span>
        </div>
        {}
        <div className="stats-item">
          <span className="stats-label">{t('highestRank')}</span>
          <span className="stats-value">Diamond III</span>
        </div>
        <div className="stats-item">
          <span className="stats-label">{t('totalFriends')}</span>
          <span className="stats-value">50</span>
        </div>
      </div>

      <div className="profile-data">
        <div className="data-item">
          <button className="data-title">{t('rankings')}</button>
          <div className="data-card">
            {}
            <p>{t('top10')}</p>
          </div>
        </div>
        <div className="data-item">
          <button className="data-title">{t('winrate')}</button>
          <div className="data-card">
            {}
            <p>67% {t('winrate')}</p>
          </div>
        </div>
        {}
        <div className="data-item">
          <button className="data-title">{t('matches')}</button>
          <div className="data-card">
            {}
            <p>{t('recentmatch')}</p>
          </div>
        </div>
        <div className="data-item">
          <button className="data-title">{t('achievements')}</button>
          <div className="data-card">
            {}
            <p>{t('achievementscore')}</p>
          </div>
        </div>
      </div>

      <div className="show-all-games">
        <select className="games-dropdown">
          {}
          <option>CSGO</option>
          <option>VALORANT</option>
          <option>RAINBOW6</option>
        </select>
      </div>

      <div className="profile-bottom">
        <div className="bottom-item">
          <button className="bottom-title">{t('about')}</button>
          <div className="bottom-card">
            {}
            <p>{t('aboutMe')}</p>
          </div>
        </div>
        <div className="bottom-item">
          <button className="bottom-title">{t('socials')}</button>
          <div className="bottom-card">
            {}
            <p>{t('socials')}</p>
            <ul className="social-media-links">
              <li>
                <a href="https://www.facebook.com/john.doe" target="_blank" rel="noopener noreferrer">
                  <img src="path/to/facebook-icon.png" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                  <img src="path/to/twitter-icon.png" alt="Twitter" />
                </a>
              </li>
              {}
            </ul>
          </div>
        </div>
        {}
        <div className="bottom-item">
          <button className="bottom-title">{t('feed')}</button>
          <div className="bottom-card">
            {}
            <p>{t('recentActivity')}</p>
            <ul className="feed-items">
              <li>
                <span className="feed-date">{t('hours')}</span>
                <p>{t('matchResult')}</p>
              </li>
              <li>
                <span className="feed-date">{t('days')}</span>
                <p>{t('sharedVideo')}</p>
              </li>
              {}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
