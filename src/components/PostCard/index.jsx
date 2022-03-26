export const PostCard = ({id, title, cover, body}) => {
    return (
        <div className='post'>
            <img className='post-image' src={cover} alt={title}></img>
            <div  className="post-content">
                <h1 >{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
}