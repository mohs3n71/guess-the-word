import { FunctionComponent, ReactNode } from 'react';
import styles from 'styles/modal.module.scss';

interface ModalProps {
  children: ReactNode,
  open: boolean,
  onClose: () => void
}

const Modal: FunctionComponent<ModalProps> = ({ children, open, onClose }) => {
  return (
    <>
      {open &&
        (<div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalCloseButton} role="button" onClick={onClose}>
              X
            </div>
            {children}
          </div>
        </div>)
      }
    </>);
}

export default Modal;