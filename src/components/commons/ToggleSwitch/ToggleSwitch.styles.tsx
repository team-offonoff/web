import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  background: rgb(255 255 255 / 10%);
  border-radius: 40px;
`;

const Indicator = styled(motion.div)`
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 30px;

  /* box-shadow: 0 2px 4px 0 rgb(0 0 0 / 9%); */

  /* opacity: 0; */
`;

const OptionContainer = styled.div`
  z-index: 1;
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2px;
  overflow: hidden;
  border-radius: 24px;
`;

const OptionInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  appearance: none;
  border: 0;
`;

const OptionLabel = styled.label`
  width: 100%;
  padding: 4px 14px;
  margin: 0;
  color: #6b7684;
  text-align: center;
  appearance: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
`;

export { Container, Indicator, OptionContainer, OptionInput, OptionLabel };
