function ArticleList ({data}) {

    return (
        <main>
        {data.map((item) => (
            <ol key = {item.posts.id}>
                <li>{item.posts.title}</li>
            </ol>
        ))}
        </main>
    )
}

export default ArticleList;