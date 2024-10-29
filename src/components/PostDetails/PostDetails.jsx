
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const postDetails = useLoaderData()
    const {id, title, body} = postDetails

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className='detailsContainer'>
            <h2>Post Details About: {id}</h2>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;