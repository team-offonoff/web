import * as ReactDOM from 'react-dom';

const ReactPortal = ({ children }: { children: React.ReactNode }) => {
  return ReactDOM.createPortal(children, document.body);
};

export default ReactPortal;
