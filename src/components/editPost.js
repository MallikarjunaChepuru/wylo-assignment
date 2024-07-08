import React, { useState } from 'react'

const EditPost = ({editTask,post}) => {
 // console.log(post)
  const [value, setValue] = useState(post.post)
  // console.log(value)
  const handleSubmit = event => {
    event.preventDefault()
    editTask(value,post.id)
  }
  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} type='text' className='input' placeholder='Update Post' />
      <button type='submit' className='btn-container'> Update Post</button>

    </form>
  )
}

export default EditPost
 