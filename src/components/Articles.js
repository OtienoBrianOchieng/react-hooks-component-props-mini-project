
function Articles ({blogData}) {

    return (

        <article>
            {blogData.posts.map((post) => (
                <div key = {post.id}>
                    <h3> {post.title} </h3>
                    <small> {post.time} </small>
                    <p>{post.time}</p>
                </div>

            ))}
        </article>
    )
}
export default Articles;