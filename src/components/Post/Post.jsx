import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {

    const {id, title} = post

    const navigate = useNavigate()
    
    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post-content'>
            <h3>User ID: {id}</h3>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <br />
            <button onClick={handleShowDetail}>Click to see Details</button>
        </div>
    );
};

export default Post;