import { forwardRef } from 'react';

interface InputProps {
  inputID: string,
  labelText: string,
  type: string,
  placeholder: string,
  required?: boolean,
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ inputID, labelText, type, placeholder, required = false }, ref) => {
  return (
    <>
      <label
        htmlFor={inputID}
        className="sr-only">
        {labelText}
      </label>
      <input
        ref={ref}
        type={type}
        id={inputID}
        className="form-control"
        placeholder={placeholder}
        required={required}
      />
    </>
  )
});

export default Input;