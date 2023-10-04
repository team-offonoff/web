import * as ReactDOM from 'react-dom';
import { styled } from 'styled-components';

const PortalContainer = styled.aside`
  position: relative;
  width: 100%;
  max-width: 512px;
  margin: 0 auto;
`;

const ReactPortal = ({ children }: { children: React.ReactNode }) => {
  const rootElement = document.getElementById('portal-root') as HTMLElement;
  return ReactDOM.createPortal(<PortalContainer>{children}</PortalContainer>, rootElement);
};

export default ReactPortal;
