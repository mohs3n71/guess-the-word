import { FunctionComponent } from 'react';
import styles from 'styles/footer.module.scss';

interface FooterProps {
  description: string,
}

const Footer: FunctionComponent<FooterProps> = ({ description }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className="text-muted">{description}</span>
      </div>
    </footer>);
}

export default Footer;