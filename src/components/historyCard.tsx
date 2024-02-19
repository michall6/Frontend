import React, { useContext } from 'react'
import IHistory from '../interfaces/IHistory'
import { MainContext } from '../context/mainContext';
import axios from 'axios';
import '../css/history.css'

const HistoryCard: React.FC<{ history: IHistory }> = ({ history }) => {
    const { setIsLoading, setPosts } = useContext(MainContext);

    const get_history_post = async (search_id: string): Promise<void> => {
        try {
            setIsLoading(true)
            const response = await axios.get(`http://localhost:8000/history/by-id/${search_id}`);            
            if (response.status == 200) {
                setPosts(response.data);
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
            className=' singleHistory border rounded mx-1 my-2 px-2 py-2 text-start fs-5 row justify-content-between align-items-end font-weight-light'>
                      <br />
 <div className='col-7'>
            <span className='font-weight-bold'>{history.id}</span>
            <br />
                <span className='font-weight-bold'>{history.subreddit}</span>
                <span className='col-5 text-end fs-5 fw-light'> {history.category}</span>
            </div>
        </div>
    )
}

export default HistoryCard