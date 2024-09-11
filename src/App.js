// src/App.js
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import './App.css'; // Add CSS for global styling

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <Dashboard />
        </div>
      ) : (
        <LoginPage onLogin={setIsAuthenticated} />
      )}
    </div>
  );
}

export default App;
