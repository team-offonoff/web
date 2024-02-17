import { styled } from 'styled-components';

import { colors } from '@styles/theme';

interface DefaultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  disabled: boolean;
  title: string;
}

const DefaultButton = ({ onClick, disabled, title, ...rest }: DefaultButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} {...rest}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  color: ${(props) => (props.disabled ? colors.navywhite_40 : colors.white)};
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? colors.navywhite_20 : colors.purple)};
  border-radius: 10px;
`;

export default DefaultButton;
