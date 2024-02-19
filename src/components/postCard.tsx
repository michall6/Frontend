import React, { useEffect, useState } from 'react'
import IPost from '../interfaces/IPost'
import { FaInfoCircle } from 'react-icons/fa';

const PostCard: React.FC<{ post: IPost }> = ({ post }) => {
    const [sentiment, setSentiment] = useState("")
    const [displayMore, setdisplayMore] = useState(false)

    const buttonStyle = {
        backgroundColor: ' rgba(178, 206, 107, 0.608)',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };
    

    const getSentiment = (sentiment_code: string):void => {
        switch (sentiment_code) {
            case "POSITIVE":
                setSentiment("POSITIVE")
                break;
            case "NEGATIVE":
                setSentiment("NEGATIVE")
                break;
            case "NETURAL":
                setSentiment("NETURAL")
                break;
        }
    }

    useEffect(() => {
        getSentiment(post.sentiment)
    }, [])

    return (

        <main className="container-fluid p-5">
        <div className="container">
            <div className="row justify-content-between">
             <h2 className='text-start fs-5 col-9'>Title : {post.title}</h2>             
                     <div className="box box1 col-md-4 mb-5" data-aos="fade-up" data-aos-duration="700" >
                         <div className="card-body">
                        
                            <h5 className=" pt-3 mt-3">sentiment:  {post.sentiment}</h5>
                            <h5 className=" pt-3 mt-3">sentiment:  {sentiment}</h5>
                            {/* <div className={`${sentimentColor}`}>sentiment: {post.sentiment}       </div>     */}
                            {/* <p className="card-text my-3 text-secondary lead">{post.selftext}</p> */}
                                      {displayMore && <>
                 <div className='text-start'>
                   <span className=' text-start my-2 '>{post.selftext}</span>
                  </div>
             </>}
             </div>

            <div className=''>
             <br />

                 {!displayMore && <button style={buttonStyle}
                     onClick={() => { setdisplayMore(true) }}>
             <h2><FaInfoCircle /> More Info</h2> 
              </button>
             
             }
         

                {displayMore && <button style={buttonStyle}
                     onClick={() => { setdisplayMore(false) }}>
             <h2><FaInfoCircle /> Less Info</h2> 
              </button>
}

            </div>
        </div>
                            
                        </div>
                    </div>
     </main>




    )
}

export default PostCard

