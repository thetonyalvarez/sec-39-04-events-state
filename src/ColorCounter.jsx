import React, { useState } from 'react'

var colorCounter = {}



const ColorCounter = (props) => {

  console.log(props.colors[0].color, "&&&")

  for (let i = 0; i < props.length; i++) {
    colorCounter[i] = {
      color: props.colors[i].color,
      count: colorCounter[i] ? colorCounter[i].count + 1 : 1
    }
  }
  
  let result = Object.values(colorCounter)
  
  console.log(colorCounter, "***********")
  // console.log(result, "***********")

  return (
    <div></div>
  )
}

export default ColorCounter