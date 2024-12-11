const MenuItem = ({ children }) => {
  return (
    <li className="menu__item">
      <a href="#news" className="menu__link">
        {children}
      </a>
    </li>
  )
}

export default MenuItem
