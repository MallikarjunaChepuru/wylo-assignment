import React, { useState } from 'react'

const CreatePost = ({ addPost }) => {
  const [value, setValue] = useState("")
  // console.log(value)
  const handleSubmit = event => {
    event.preventDefault()
    if (value) {
      addPost(value)
      setValue("")

    }

  }
  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        className='input'
        placeholder='what are the tasks today?' />

      <button type='submit' className='btn-container'> Add Post</button>

    </form>
  )
}

export default CreatePost
