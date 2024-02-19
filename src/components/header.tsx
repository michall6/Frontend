import React from 'react';
import '../css/footer.css'
import { FaInfoCircle } from 'react-icons/fa';
// import Search from './search';
// import Posts from './posts';
import { Link } from 'react-router-dom';
// import History from './history';
// import Search from './search';
// import Posts from './posts';
const Header: React.FC = () => {
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
            <Link   to="/main">  <i className="fa fa-plane" aria-hidden="true"></i>
                Reddit<strong> Post</strong></Link>

              {/* <a href='#'>
                <i className="fa fa-plane" aria-hidden="true"></i>
                Reddit<strong> Post</strong>
              </a> */}
              <br/>
              <Link style={buttonStyle} to="/history"> <FaInfoCircle /> History</Link>
              {/* <div className='col-9 m-0 '>
                    <Search />
                    <Posts />
                </div> */}
              {/* <button
                                    style={buttonStyle}
                                    onClick={() => showDetail(biz.id)}

                                >
                                    <FaInfoCircle /> History
                                </button> */}
              {/* <Search />
                    <Posts />
              <div className='col-3 m-0'>
                    <History />
                </div> */}
            </h1>
          </div>
          {/* <ul id="nav_open" className="nav col-auto align-items-center p-0">
            <li className="d-block d-md-none"><a href='index.html'>
              <i className="fa fa-home" aria-hidden="true"></i>
              Home
            </a></li>
            <li><a href='about.html'>
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              About
            </a></li>
            <li><a href='media.html'>
              <i className="fa fa-video-camera" aria-hidden="true"></i>
              Media
            </a></li>
            <li><a href='faq.html'>
              <i className="fa fa-question-circle" aria-hidden="true"></i>
              FAQ
            </a></li>
            <li><a href='contact.html'>
              <i className="fa fa-phone" aria-hidden="true"></i>
              Contact
            </a></li>
          </ul>
          <div id="burger_btn" className="burger col text-end">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

