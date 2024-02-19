import React, { useState } from 'react';
// import History from './history';
import IPost from '../interfaces/IPost';
import { MainContext, MainContextType } from '../context/mainContext';
import Search from './search';
import Posts from './posts';
import Footer from './footer';
import Header from './header';
import '../css/footer.css'

const Main: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState<IPost[]>([]);
    const [searchDone, setsearchDone] = useState<number>(0);

    const value: MainContextType = {
        posts: posts,
        setPosts: setPosts,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
    
        searchDone: searchDone,
        setsearchDone: setsearchDone
    }
    // const buttonStyle = {
    //     backgroundColor: ' rgba(178, 206, 107, 0.608)',
    //     color: 'white',
    //     border: 'none',
    //     padding: '10px 20px',
    //     fontSize: '16px',
    //     cursor: 'pointer',
    //     transition: 'background-color 0.3s ease',
    // };
    

    return (
        
        <MainContext.Provider value={value}>
            <Header/>
            <div className="footer row justify-content-between">
                  <br/>  <br/>   
                <div className='col-9 m-0 '>
                    <Search />
                    <Posts  />
                </div>
            </div>
            <Footer/>
        </MainContext.Provider>
    );
}

export default Main;
