import { FormEventHandler, FunctionComponent, ReactNode } from 'react';
import styles from 'styles/form.module.scss';

interface FormProps {
  children: ReactNode,
  formTitle?: string,
  onSubmit?: FormEventHandler,
}

const Form: FunctionComponent<FormProps> = ({ children, formTitle, onSubmit = (event) => { event.preventDefault() } }) => {
  return (
    <form className={styles.simpleForm} onSubmit={onSubmit}>
      {formTitle && <h1 className="h4 mt-5 mb-3 font-weight-normal">{formTitle}</h1>}
      {children}
    </form>
  );  
}

export default Form;