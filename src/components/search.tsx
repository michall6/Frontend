import axios from 'axios';
import React, { FormEvent, useContext, useRef } from 'react'
import { MainContext } from '../context/mainContext';
import IPost from '../interfaces/IPost';
import '../css/form.css'

const Search: React.FC = () => {
    const { setPosts, searchDone,setIsLoading, setsearchDone } = useContext(MainContext);

    const subredditRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLSelectElement>(null);

    const subreddit = subredditRef.current?.value;
    const category = categoryRef.current?.value;
    
    const buttonStyle = {
        backgroundColor: ' rgba(178, 206, 107, 0.608)',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };
    
    const search = async (e: FormEvent): Promise<void> => {
        e.preventDefault()
        setPosts([])
        let postsList = await getPosts();
        if (postsList&&postsList.length > 0)
            await saveHistory(postsList);
    }

    const getPosts = async (): Promise<IPost[]> => {
        setIsLoading(true);
        try {
            const res = await axios.get<IPost[]>(`http://localhost:8000/posts/get-reddit-posts/${subreddit}/${category}`)
            setIsLoading(false);
            setPosts(res.data);
            return res.data
        }
        catch (error) {
            setIsLoading(false);
            return []
        }
    };
  


    const saveHistory = async (postsList: IPost[]): Promise<void> => {
        try {
            let url: string = `http://localhost:8000/history`
            let history_data: object = {
                "category": categoryRef.current?.value,
                "subreddit": subredditRef.current?.value,
                "results": postsList
            }
           
            const response = await axios.post(url, history_data);
            if (response.status == 200) {
                setPosts(response.data);
            }
        }
        catch (error) {
        }
        setsearchDone(searchDone + 1)
    }
 

    return (
        <div className=' mr-0 w-100 text-end  text-primary d-flex justify-content-end'>
            <form style={buttonStyle} className='row justify-content-between   w-50 form-group text-primary p-4'>
                <input type="text" ref={subredditRef} style={buttonStyle} className='col-4 rounded border-1' placeholder='Reddit Subeddit ...' />
                <br/><br/>
                <select name="categories" id="" ref={categoryRef} style={buttonStyle} className='col-4 rounded '>
                    <option value="hot">HOT</option>
                    <option value="new">NEW</option>
                    <option value="top">TOP</option>
                    <option value="rising">RISING</option>
                </select>
                <br/><br/>
                <button onClick={search} style={buttonStyle} className='col-3 btn_form'>Search Reddit Post</button>
                <br/><br/><br/>
            </form>
        </div>
    )
}

export default Search