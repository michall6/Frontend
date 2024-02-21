import React, { useContext } from 'react'
import IHistory from '../interfaces/IHistory'
import { MainContext } from '../context/mainContext';
import axios from 'axios';
import '../css/history.css'

const HistoryCard: React.FC<{ history: IHistory }> = ({ history }) => {
    const { setIsLoading, setPosts,setShowHistory } = useContext(MainContext);

    const get_history_post = async (history_id: string): Promise<void> => {
        try {
            setIsLoading(true)
            const response = await axios.get(`http://localhost:8000/history/by-id/${history_id}`);
            if (response.status == 200) {
                setPosts(response.data);
                setShowHistory(false)
            }
            else
                setPosts([])
        }
        catch (error) {
            setPosts([])
        }
        setIsLoading(false)
    }

    return (
        <div onClick={() => { get_history_post(history.id) }}
            className='historyCard'>
            <br />
            <div>
                <span >{history.id}</span>
                
                <br />
                <span >{history.subreddit}</span>
                <span > {history.category}</span>
            </div>
        </div>
    )
}

export default HistoryCard