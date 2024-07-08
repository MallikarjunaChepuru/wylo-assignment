import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import CreatePost from './createPost'
import { Post } from './post'
import EditPost from './editPost'

const PostWrapper = () => {
  const [posts, setPosts] = useState([])
  // console.log(posts)

  useEffect(()=>{
    const savedPosts=JSON.parse(localStorage.getItem("posts"))||[];
    setPosts(savedPosts)
  },[])

  const addPost = (post) => {
    let newPosts = ([...posts, { id: uuidv4(), post: post, completed: false, isEditing: false }])
    setPosts(newPosts)
    localStorage.setItem("posts", JSON.stringify(newPosts))

  }

  const toggleComplete = id => {
    const newPosts = (posts.map(eachPost => eachPost.id === id ? { ...eachPost, completed: !eachPost.completed } : eachPost))
    setPosts(newPosts)
    localStorage.setItem("posts", JSON.stringify(newPosts))

  }

  const deletePost = (id) => {
    const newPosts = (posts.filter(post => post.id !== id))
    setPosts(newPosts)
    localStorage.setItem("posts", JSON.stringify(newPosts))


  }

  const editPost = id => {
    setPosts(posts.map(post => post.id === id ? { ...post, isEditing: !post.isEditing } : post))
  }

  const editTask = (post, id) => {
    const newPosts = posts.map((eachPost) => eachPost.id === id ?
      { ...eachPost, post, isEditing: !eachPost.isEditing } : eachPost)
    setPosts(newPosts)
    localStorage.setItem("posts", JSON.stringify(newPosts))


  }

  return (
    <div className='wrapper'>
      <h1>Add Posts</h1>


      <CreatePost addPost={addPost} />
      {posts.map((post, index) => (
        post.isEditing ?
          <EditPost editTask={editTask} key={index} post={post} /> :
          <Post post={post} key={index} editPost={editPost} toggleComplete={toggleComplete} deletePost={deletePost} />


      ))}


    </div>
  )
}

export default PostWrapper
