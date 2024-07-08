
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Post = ({post,toggleComplete,deletePost,editPost}) => {
  // console.log(post)
  return (
    <div className='each-post'>
        <p onClick={()=>toggleComplete(post.id)} className={`${post.completed?"completed":""}`}>{post.post}</p>
        <div>
            <FontAwesomeIcon onClick={()=>editPost(post.id)}  icon={faPenToSquare}/>
            <FontAwesomeIcon onClick={()=>deletePost(post.id)} icon={faTrash}/>
        </div>
    </div>
  )
}
