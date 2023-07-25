import Link from 'next/link';
import React from 'react'

const PostPage = async () => {

  const getPosts = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts', {'cache': 'no-cache'})
    return posts.json();
  }

  const data = await getPosts();

  return (
    <ul>
      {data.map((item) => (
        <li>
          <Link href={`/post/${item.id}/${item.userId}?name=zhangsan`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default PostPage