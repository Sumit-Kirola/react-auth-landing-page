import { useState, useEffect } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);

  // Check if user is logged in (from localStorage)
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentPage('home');
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setCurrentPage('home');
  };

  const handleSignUpSuccess = () => {
    setCurrentPage('login');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setCurrentPage('login');
  };

  return (
    <div>
      {currentPage === 'login' && (
        <div>
          <Login onLoginSuccess={handleLoginSuccess} onGoSignUp={() => setCurrentPage('signup')} />
          <div className="text-center py-4">
            <button
              onClick={() => setCurrentPage('signup')}
              className="text-blue-500 underline cursor-pointer"
            >
              Create an account
            </button>
          </div>
        </div>
      )}

      {currentPage === 'signup' && (
        <div>
          <SignUp onSignUpSuccess={handleSignUpSuccess} onGoLogin={() => setCurrentPage('login')} />
          <div className="text-center py-4">
            <button
              onClick={() => setCurrentPage('login')}
              className="text-purple-500 underline cursor-pointer"
            >
              Back to Login
            </button>
          </div>
        </div>
      )}

      {currentPage === 'home' && user && (
        <Home user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
