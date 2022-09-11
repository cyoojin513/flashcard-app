import React, { useState, useEffect } from 'react';
import './index.css'

function App() {
  const [quiz, setQuiz] = useState("")
  const [randNumber, setRandNumber] = useState()
  const [answer, setAnswer] = useState("")
  const [correct, setCorrect] = useState("")

  function fetchingData() {
    fetch('/quizzes')
    .then(r => r.json())
    .then(data => setQuiz(data))
  }
  useEffect(() => fetchingData, [])

  function generateIndexNum() {
    setRandNumber(Math.floor(Math.random() * quiz.length))
    setCorrect("")
  }

  console.log(`question id: ${randNumber}`)
  
  function Questions() {    
    if(quiz !== "") {
      const questions = quiz.map(item => item.question)
      return <h3>{ questions[randNumber] }</h3>
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(quiz !== "") {
      if(quiz[randNumber].answer == answer){
        setCorrect(`Correct!' ${quiz[randNumber].answer}`)
      } else {
        setCorrect(`Try again`)
      }
    }
    e.target.reset()
  }

  function printAnswer() {
    if(quiz !== "") {
      setCorrect(quiz[randNumber].answer)
    }
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <Questions />
        <input 
          type='text' 
          name='answer' 
          placeholder='answer'
          autoComplete="off"
          onChange={e => setAnswer(e.target.value)}
        ></input>
        <button className='submit' type='submit'>submit</button>
      </form>
      <button className='answer' type='answer' onClick={ printAnswer }>answer</button>
      <button className='next' type='next' onClick={ generateIndexNum }>next</button>
      <h2>{ correct }</h2>
    </div>
  );
}

export default App;
