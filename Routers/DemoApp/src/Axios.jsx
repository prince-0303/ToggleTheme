import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {

    const [post, setPost] = useState([])

    useEffect(() => {

    axios('https://jsonplaceholder.typicode.com/posts')
    .then(response => 
        {console.log(response.data)})
    .catch(error => 
        {console.log('error occured',error )}) 

    },[]);



  return (
    <>
        <h2>Post</h2>
        <ul>
            {post.slice(0,5).map(post => (
                <li key = {post.id}>{post.title}</li>
            ))}
        </ul>
    </>
  )
}

export default Axios