import { FunctionComponent, ReactNode } from 'react'

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button',
  children: ReactNode,
}

const Button: FunctionComponent<ButtonProps> = ({ type = 'button', children }) => {
  return (
    <button
      className="btn btn-lg btn-primary btn-block mt-3"
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;