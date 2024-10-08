import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Chat from './components/Chat';


function App() {
  
  const [username, setUsername] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const username = user.displayName || user.email.split('@')[0];
        setUsername(username);
        localStorage.setItem("username", username);
      } else {
        setUsername(null);
        localStorage.removeItem("username");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <Router>
      <Header username={username} />
      <AppRoutes />
      <Footer />
      <Chat />
    </Router>
  )
}

export default App