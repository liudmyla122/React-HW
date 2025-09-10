import React, { useState } from 'react'
import Answer from './Answer'

function MathQuiz() {
  const [score, setScore] = useState(0)

  const [a, setA] = useState(Math.floor(Math.random() * 10))
  const [b, setB] = useState(Math.floor(Math.random() * 10))

  const updatePoints = (userAnswer) => {
    if (parseInt(userAnswer) === a + b) {
      setScore(score + 1)
    } else {
      setScore(score - 1)
    }

    setA(Math.floor(Math.random() * 10))
    setB(Math.floor(Math.random() * 10))
  }

  return (
    <div style={styles.container}>
      <h1>Math Quiz</h1>
      <p>
        Сколько будет:{' '}
        <b>
          {a} + {b}
        </b>{' '}
        ?
      </p>
      <p>Ваш счёт: {score}</p>

      {}
      <Answer updatePoints={updatePoints} />
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
}

export default MathQuiz
