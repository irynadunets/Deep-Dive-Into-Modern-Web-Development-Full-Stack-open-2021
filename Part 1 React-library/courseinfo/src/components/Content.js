import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
  return (
    <div>
    {parts.map((part) =>
      <Part key = {part.name} name = {part.name}  exercises = {part.exercises}/>
    )}
    </div>
  )
}

export default Content