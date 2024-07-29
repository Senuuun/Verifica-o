import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = () => {
    if (age < 18 || age > 120) {
      setError('Idade deve ser entre 18 e 120 anos.');
      return;
    }

    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    login(user);
    navigate('/home');
  };

  return (
    <div className="register-container">
      <h1>Registro</h1>
      <input 
        type="text" 
        placeholder="Nome completo" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Senha" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Idade" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <button onClick={handleRegister}>Registrar</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default RegisterPage;
