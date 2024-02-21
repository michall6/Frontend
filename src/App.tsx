import React from 'react';
import './App.css';
import Main from './components/main';
// import History from './components/history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/main" element={<Main />} />
          {/* <Route path="/history" element={<History />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
