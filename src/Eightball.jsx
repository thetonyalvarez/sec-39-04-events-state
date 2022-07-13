import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ColorCounter from './ColorCounter'

const getRandom = (max) => {
  return Math.floor(Math.random() * max)
}

const Eightball = (props) => {
  let randomChoice = getRandom(props.answers.length)

  const [color, setColor] = useState("black")
  const [msg, setMsg] = useState("Think Of A Question")

  const handleClick = () => {
    setColor(props.answers[randomChoice].color);
    setMsg(props.answers[randomChoice].msg);
  }

  const handleResetClick = () => {
    setColor("black")
    setMsg("Think Of A Question")
  }

  return (
    <Box>
      <Box className="Eightball hover:cursor-pointer rounded-full flex justify-center items-center mx-auto" 
        onClick={handleClick}
        sx={{
          width: 300,
          height: 300,
          backgroundColor: color,
          my: 4,
        }}
        >
        <Typography
          sx={{ color: 'white' }}
          >
          {msg}
        </Typography>
      </Box>
      <ColorCounter colors={props.answers}/>
      <Button color="primary" variant="contained" onClick={handleResetClick}>
        Reset 8Ball
      </Button>
    </Box>
  );
}

Eightball.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
}

export default Eightball