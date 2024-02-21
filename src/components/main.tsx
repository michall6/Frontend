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
    const [searchDone, setsearchDone] = useState<number>(0);
    const [showHistory, setShowHistory] = useState(false);


    const value: MainContextType = {
        posts: posts,
        setPosts: setPosts,

        isLoading: isLoading,
        setIsLoading: setIsLoading,

        searchDone: searchDone,
        setsearchDone: setsearchDone,
        
        showHistory:showHistory,
        setShowHistory:setShowHistory
    }


    return (

        <MainContext.Provider value={value}>
            <Header />
            <div >
            {showHistory && <History />}
                </div>
            <br />
            <br />
            <div >
            {!showHistory && <Search /> }
                </div>
                     
                    <Posts/>
 
            <Footer />
        </MainContext.Provider>
    );
}

export default Main;
