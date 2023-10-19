import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const SheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 512px;
  padding: 100px 0 0;
  margin: 0 auto;
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
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow:
    0 2px 5px rgb(0 0 0 / 6%),
    0 2px 13px rgb(0 0 0 / 12%);
`;
