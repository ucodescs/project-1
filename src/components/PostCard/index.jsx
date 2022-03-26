export const PostCard = ({id, title, cover, body}) => {
    return (
        <div className='post'>
            <img className='post-image' src={cover} alt={title}></img>
            <div  className="post-content">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
}