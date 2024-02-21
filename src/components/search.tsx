import axios from 'axios';
import React, { FormEvent, useContext, useRef } from 'react'
import { MainContext } from '../context/mainContext';
import IPost from '../interfaces/IPost';

const Search: React.FC = () => {
    const { setPosts, searchDone, setIsLoading, setsearchDone } = useContext(MainContext);

    const subredditRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLSelectElement>(null);


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
        let allPosts = await getPosts();
        if (allPosts && allPosts.length > 0)
        setsearchDone(searchDone + 1)
    }

    const getPosts = async (): Promise<IPost[]> => {
        setIsLoading(true);
        try {
            const res = await axios.get<IPost[]>(`http://localhost:8000/posts/${subredditRef.current?.value}/${categoryRef.current?.value}`)
            setIsLoading(false);
            setPosts(res.data);
            return res.data
        }
        catch (error) {
            setIsLoading(false);
            return []
        }
    };

 


    return (
        <div >
            <form style={buttonStyle} >
                <input type="text" ref={subredditRef} style={buttonStyle} placeholder='Reddit Subeddit ...' />
                <br /><br />
                <select name="category" id="" ref={categoryRef} style={buttonStyle} >
                    <option value="new">NEW</option>
                    <option value="hot">HOT</option>
                    <option value="top">TOP</option>
                    <option value="rising">RISING</option>
                </select>
                <br /><br />
                <button onClick={search} style={buttonStyle} className='col-3 btn_form'>Search Reddit Post</button>
                <br /><br /><br />
            </form>
        </div>
    )
}

export default Search