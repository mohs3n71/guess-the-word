import { FunctionComponent } from 'react';

interface InputProps {
  inputID: string,
  labelText: string,
  type: string,
  placeholder: string,
  required?: boolean,
}

const Input: FunctionComponent<InputProps> = ({ inputID, labelText, type, placeholder, required = false }) => {
  return (
    <>
      <label
        htmlFor={inputID}
        className="sr-only">
        {labelText}
      </label>
      <input
        type={type}
        id={inputID}
        className="form-control"
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}

export default Input;