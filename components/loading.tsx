import { FunctionComponent } from 'react';

const Loading: FunctionComponent = () => {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;