import * as ReactDOM from 'react-dom';

const ReactPortal = ({ children }: { children: React.ReactNode }) => {
  const root = document.getElementById('root')!;
  return ReactDOM.createPortal(children, root);
};

export default ReactPortal;
