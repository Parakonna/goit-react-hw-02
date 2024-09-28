import React from 'react'

const Feedback = ({count}) => {
  return (
    <div>
      <ul>
        <li>Good: {count.good}</li>
        <li>Neutral: {count.neutral}</li>
        <li>Bad: {count.bad}</li>
       
      </ul>
    </div>
  )
}

export default Feedback