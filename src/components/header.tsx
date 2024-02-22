import React, { useContext } from 'react';
import '../css/header.css'
// import '../css/footer.css'

import { Link } from 'react-router-dom';
import { MainContext } from '../context/mainContext';

const Header: React.FC = () => {
  
  const { setdisplaySearchHistory, displaySearchHistory } = useContext(MainContext);

  const buttonStyle = {
    backgroundColor: ' rgba(178, 206, 107, 0.608)',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <header className="header container-fluid">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="logo col-auto p-0">
            <h1 className="m-0">
              <Link to="/main">  <i className="fa fa-plane" aria-hidden="true"></i>
                Reddit<strong> Post</strong></Link>
              <br />
                     <button style={buttonStyle} onClick={() => { setdisplaySearchHistory(!displaySearchHistory) }}>
                        History
                    </button>

            </h1>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

