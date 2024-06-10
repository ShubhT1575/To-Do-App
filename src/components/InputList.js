import React from 'react'

const InputList = ({item , toggleDelete , index}) => {
  return (
    <div className='list-conatiner'>
      <div className="todo-list">
        {item}
        <div className="del-btn" onClick={(e)=> toggleDelete(index)}><i className="fa-solid fa-trash"></i></div>
      </div>
    </div>
  )
}

export default InputList
