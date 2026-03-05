import React, { useState } from 'react';
import './App.css';
import TryOnPage from './pages/TryOnPage';
import RecommendationsPage from './pages/RecommendationsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [currentPage, setCurrentPage] = useState('tryon');
  const [userProfile, setUserProfile] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>👗 Real-Time Virtual Clothing Try-On</h1>
          <p>AI-Powered Fashion Recommendations with Hadoop Big Data</p>
        </div>
        <nav className="nav-tabs">
          <button 
            className={`nav-btn ${currentPage === 'tryon' ? 'active' : ''}`}
            onClick={() => setCurrentPage('tryon')}
          >
            Try-On
          </button>
          <button 
            className={`nav-btn ${currentPage === 'recommendations' ? 'active' : ''}`}
            onClick={() => setCurrentPage('recommendations')}
          >
            Recommendations
          </button>
          <button 
            className={`nav-btn ${currentPage === 'profile' ? 'active' : ''}`}
            onClick={() => setCurrentPage('profile')}
          >
            My Profile
          </button>
        </nav>
      </header>

      <main className="app-main">
        {currentPage === 'tryon' && (
          <TryOnPage onProfileUpdate={setUserProfile} />
        )}
        {currentPage === 'recommendations' && (
          <RecommendationsPage userProfile={userProfile} />
        )}
        {currentPage === 'profile' && (
          <ProfilePage userProfile={userProfile} />
        )}
      </main>

      <footer className="app-footer">
        <p>🚀 Powered by AI + Hadoop Big Data Processing | 🚨 localhost:5173</p>
      </footer>
    </div>
  );
}

export default App;
