import { FunctionComponent } from 'react';

interface HeaderProps {
  pageTitle: string,
}

const Header: FunctionComponent<HeaderProps> = ({ pageTitle }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/">{pageTitle}</a>
      </nav>
    </header>
  );
}

export default Header;