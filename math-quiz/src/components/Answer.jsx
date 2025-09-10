import React, { useState } from 'react'

function Answer({ updatePoints }) {
  const [userInput, setUserInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePoints(userInput)
    setUserInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Введите ответ"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Проверить
      </button>
    </form>
  )
}

const styles = {
  input: {
    padding: '8px',
    fontSize: '16px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '8px 15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
}

export default Answer
