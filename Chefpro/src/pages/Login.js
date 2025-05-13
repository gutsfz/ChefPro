import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    try {
      login(username, password);
      navigate('/admin/lista');
    } catch (err) {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="container">
      <div className="mt-4 mb-4">
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h1 className="mb-4">Login</h1>
          
          {error && (
            <div className="erro-mensagem mb-3">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="mb-1">
                Usuário:
              </label>
              <input
                type="text"
                id="username"
                className="campo-entrada"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="mb-1">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                className="campo-entrada"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="botao botao-primario">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
