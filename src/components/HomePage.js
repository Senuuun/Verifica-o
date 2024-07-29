import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="home-container">
      <h1>Bem-vindo ao Home</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default HomePage;
