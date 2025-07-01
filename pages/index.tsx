import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication - in a real app, use proper auth with backend validation
    if (username === 'admin' && password === 'ctf2023') {
      // Set auth token in cookies/localStorage
      document.cookie = `authToken=secure_token_29927; path=/; max-age=3600`;
      router.push('/flag');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <style jsx global>{`
        :root {
          --primary: #2563eb;
          --primary-dark: #1d4ed8;
          --error: #dc2626;
          --text: #1f2937;
          --text-light: #6b7280;
          --bg: #f9fafb;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                       Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: var(--bg);
          color: var(--text);
        }
        
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          text-align: center;
        }
        
        h1 {
          color: var(--primary);
          margin-bottom: 2rem;
          font-size: 2.5rem;
        }
        
        .login-form {
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          margin-top: 1rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
          text-align: left;
        }
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text);
        }
        
        input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 1rem;
        }
        
        input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        button {
          width: 100%;
          padding: 0.75rem;
          background-color: var(--primary);
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        button:hover {
          background-color: var(--primary-dark);
        }
        
        .error {
          color: var(--error);
          margin-top: 1rem;
          font-size: 0.875rem;
        }
        
        code {
          background: #e5e7eb;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-family: monospace;
        }
      `}</style>

      <h1>Welcome to the CTF!</h1>
      <p>Only logged-in users can access the <code>/flag</code> page.</p>
      
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          
          <button type="submit">Login</button>
          
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}