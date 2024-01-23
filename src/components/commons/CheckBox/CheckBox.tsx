import styled from 'styled-components';

import { CheckIcon } from '@icons/index';

import { Row } from '../Flex/Flex';
import Text from '../Text/Text';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

function Checkbox({ id, checked, onChange, children }: CheckboxProps) {
  return (
    <Row alignItems="center" gap={16}>
      <CheckBoxLabel checked={checked} htmlFor={id}>
        <HiddenCheckbox id={id} type="checkbox" onChange={onChange} checked={checked} />
        {checked && <CheckIcon width="14px" height="14px" />}
      </CheckBoxLabel>
      <label htmlFor={id} style={{ userSelect: 'none' }}>
        {children}
      </label>
    </Row>
  );
}

export default Checkbox;

const CheckBoxLabel = styled.label<{ checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
  cursor: pointer;
  background: ${({ checked, theme }) =>
    checked ? `${theme.colors.purple}` : 'rgb(77 59 124 / 20%)'};
  border-radius: 3px;

  & > svg {
    position: absolute;
    top: 3px;
    left: 3.5px;
  }
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;
