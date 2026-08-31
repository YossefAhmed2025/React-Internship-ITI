export default function Navbar({ brand, links }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          {brand}
        </a>

        <ul className="navbar-nav">
          {links.map((link) => (
            <li className="nav-item" key={link}>
              <a className="nav-link" href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
