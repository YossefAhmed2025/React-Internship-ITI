import styles from './Footer.module.css'

export default function Footer({ author }) {
  return (
    <footer className={`text-center text-light py-4 ${styles.footer}`}>
      <p className="m-0">Made by {author}</p>
    </footer>
  )
}
