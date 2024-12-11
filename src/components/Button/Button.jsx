import './Button.css'

const Button = ({ children, className, handlerClick }) => {
  return (
    <button className={className} onClick={handlerClick}>
      {children}
    </button>
  )
}

export default Button
