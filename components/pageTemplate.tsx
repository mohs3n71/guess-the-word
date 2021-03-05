import { FunctionComponent, ReactNode } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

interface PageTemplateProps {
  children?: ReactNode,
  pageTitle: string,
  footerDescription: string,
}

const PageTemplate: FunctionComponent<PageTemplateProps> = ({ children, pageTitle, footerDescription }) => {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <main role="main" className="container">
        {children}
      </main>
      <Footer description={footerDescription} />
    </>
  );
};

export default PageTemplate;