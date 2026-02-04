function Post({ author, content }) {
    return (
        <div className="postcard">
            <h3>작성자 : {author}</h3>
            <p>게시글 : {content}</p>
        </div>
    );
}

export default Post;