import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hoocks/useLogin';
import './index.css';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await loginMutation.mutateAsync({ userName, password });
      navigate('/products'); // Redireciona para a página de produtos após o login
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loginMutation.isPending}>
          {loginMutation.isPending ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;
