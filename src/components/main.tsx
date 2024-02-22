import React, { useState } from 'react';
import IPost from '../interfaces/IPost';
import { MainContext, MainContextType } from '../context/mainContext';
import Search from './search';
import Posts from './posts';
import Footer from './footer';
import Header from './header';
import History from './history';

import '../css/footer.css'

const Main: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState<IPost[]>([]);
    const [displaySearchHistory, setdisplaySearchHistory] = useState(false);


    const value: MainContextType = {
        posts: posts,
        setPosts: setPosts,

        isLoading: isLoading,
        setIsLoading: setIsLoading,

        displaySearchHistory:displaySearchHistory,
        setdisplaySearchHistory:setdisplaySearchHistory
    }


    return (

        <MainContext.Provider value={value}>
            <Header />
            <div >
            {displaySearchHistory && <History />}
                </div>
            <br />
            <br />
            <div >
            {!displaySearchHistory && <Search /> }
                </div>
                     
                    <Posts/>
 
            <Footer />
        </MainContext.Provider>
    );
}

export default Main;
