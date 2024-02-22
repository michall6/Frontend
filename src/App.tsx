import React from 'react';
import './App.css';
import Main from './components/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
