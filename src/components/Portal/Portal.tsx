import * as ReactDOM from 'react-dom';
import { styled } from 'styled-components';

const PortalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  overflow: hidden;
`;

const ReactPortal = ({ children }: { children: React.ReactNode }) => {
  const rootElement = document.getElementById('portal-root') as HTMLElement;
  return ReactDOM.createPortal(<PortalContainer>{children}</PortalContainer>, rootElement);
};

export default ReactPortal;
