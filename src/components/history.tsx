import axios from 'axios'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import IHistory from '../interfaces/IHistory'
import { MainContext } from '../context/mainContext'
import Loader from './loader'
import HistoryCard from './historyCard'
import Header from './header'
import Footer from './footer'

const History: React.FC = (): ReactElement => {
    const [history, sethistory] = useState<IHistory[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { searchDone } = useContext(MainContext);
    const buttonStyle = {
        backgroundColor: ' rgba(178, 206, 107, 0.608)',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };
    

    useEffect(() => {
        get_history()
    }, [searchDone])

    const get_history = async (): Promise<void> => {
        try {
            setIsLoading(true)
            const response = await axios.get(`http://localhost:8000/history/all`);
            if (response.status == 200) {
                sethistory(response.data);
            }
            else
                sethistory([])
        }
        catch (error) {
            sethistory([])
        }
        setIsLoading(false)
    };


    return (
      <div >
        <Header/>
        
             {isLoading && <Loader />}
            {!isLoading &&
                <div style={buttonStyle} >{history.map(item => <HistoryCard history={item} key={item.id} />)}</div>}
      
        <Footer/>
      </div>

     
    )
}

export default History