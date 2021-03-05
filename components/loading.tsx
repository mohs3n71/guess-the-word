import { FunctionComponent } from 'react';

const Loading: FunctionComponent = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;