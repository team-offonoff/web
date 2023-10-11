import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const SheetContainer = styled.div`
  position: fixed;
  inset: 0 0 0 calc((100vw - 512px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 512px;
  overflow: hidden;
`;

// display: "inline-block",
// backgroundColor: "white",
// width: 320,
// height: 768,
// border: "1px solid #E0E0E0",
// boxShadow:
//   "0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)",
// borderRadius: "13px 13px 0px 0px",
// overflow: "hidden",
// zIndex: 1000

export const Sheet = styled(motion.div)`
  z-index: 1000;
  display: inline-block;
  height: calc(100vh - 100px);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow:
    0 2px 5px rgb(0 0 0 / 6%),
    0 2px 13px rgb(0 0 0 / 12%);
`;
