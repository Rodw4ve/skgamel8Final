import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {
  const { i18n } = useTranslation();

  const { t } = useTranslation();

  const handleLanguageChange = (selectedLanguage) => {
    

    i18n.changeLanguage(selectedLanguage)
    localStorage.setItem('lang', i18n.language);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="navbar-logo" src="#" alt="Logo" />
        <Link className="navbar-button" to="/">{t('Home')}</Link>
        <Link className="navbar-button" to="/play">{t('Play')}</Link>
        <Link className="navbar-button" to="/teams">{t('Team')}</Link>
        <Link className="navbar-button" to="/shop">{t('Shop')}</Link>
      </div>
      <div className="navbar-title">SKGameL8</div>
      <div className="navbar-right">
        <select
          className="language-selector"
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
        <Link className="navbar-button" to="/create-party">{t('Party')}</Link>    
        <Link className="navbar-button" to="/friends">{t('Friend')}</Link>
        <Link className="navbar-button" to="/support">{t('Support')}</Link>
        <Link className="navbar-button" to="/profile">{t('Profile')}</Link>
      </div>
    </div>
  );
}

export default Navbar;
