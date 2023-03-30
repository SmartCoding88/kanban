import { useRef } from 'react'

const Comments = () => {

  const commentRef = useRef(null)

  function addComment(event){
    event.preventDefault();
    console.log(commentRef.current.value)
  }
  return (
    <div className='comments__container'>

      <form className='comment__form' onSubmit={addComment}>
        <label htmlFor='comment'>Add a comment</label>
        <textarea
          placeholder='Type your comment...'
          
          rows={5}
          id='comment'
          name='comment'
          required
          ref={commentRef}
        ></textarea>
        <button className='commentBtn'>ADD COMMENT</button>
      </form>

      <div className="comments__section">
        <h2>Existing Comments</h2>
      </div>
     
    </div>
  )
}

export default Comments