import { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter({ title }) {
  let [count, setCount] = useState(0)

  return (
    <section className="container text-center py-5" id="counter">
      <h2 className="mb-3">{title}</h2>

      <p className={styles.number}>{count}</p>

      {count === 0 ? (
        <p className="text-secondary">Start counting</p>
      ) : (
        <p className="text-secondary">You clicked {count} times</p>
      )}

      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </section>
  )
}
