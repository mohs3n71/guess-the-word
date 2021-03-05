import { FunctionComponent, ReactNode } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

interface PageTemplateProps {
  children?: ReactNode,
}

const PageTemplate: FunctionComponent<PageTemplateProps> = ({ children }) => {
  return (
    <>
      <Header pageTitle="Guess The Word" />
      <main role="main" className="container">
        {children}
      </main>
      <Footer description="You Can only play this game 2 times per day" />
    </>
  );
};

export default PageTemplate;