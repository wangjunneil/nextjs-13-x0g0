
const getPostDetail = async (postId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return res.json();
}

const getUserDetail = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return res.json()
}

const PostDetail = async ({params, searchParams}) => {
    
    console.log(params.slug);       // [ '3', '1' ]
    console.log(searchParams.name); // { name: 'zhangsan' }

    const postId = params.slug[0];
    const post = await getPostDetail(postId);

    const userId = params.slug[1];
    const user = await getUserDetail(userId);
    
    return (
        <>
            <h4>{post.title}</h4>            
            <div>{post.body}</div>            
            <div style={{color:'grey', marginTop:'10px'}}>{user.name}</div>
        </>
    )
}

export default PostDetail