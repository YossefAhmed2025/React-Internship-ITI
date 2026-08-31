import { useState } from 'react'
import styles from './Hero.module.css'

export default function Hero({ title, userName, onUserNameChange }) {
  let [newName, setNewName] = useState('')

  return (
    <header className={`text-center text-light py-5 ${styles.hero}`} id="home">
      <h1>{title}</h1>

      {userName ? <h3>Welcome, {userName}</h3> : <h3>Welcome, Guest</h3>}

      <input
        className="form-control w-auto d-inline-block me-2"
        type="text"
        placeholder="New name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <button className="btn btn-light" onClick={() => onUserNameChange(newName)}>
        Save
      </button>
    </header>
  )
}
