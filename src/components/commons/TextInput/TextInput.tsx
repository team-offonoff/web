import React from 'react';
import { styled } from 'styled-components';

import { colors } from '@styles/theme';

interface TextInputProps {
  placeholder: string;
  value: string;
  guideMessage?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  right?: () => React.ReactNode;
  type?: 'default' | 'error' | 'success';
}

const TextInput = (props: TextInputProps) => {
  const { placeholder, value, guideMessage, right, onChange, type = 'default' } = props;

  let inputTheme;

  switch (type) {
    case 'default':
      inputTheme = {
        border: `1px solid ${colors.sub_purple}`,
        backgroundColor: 'transparent',
      };
      break;
    case 'error':
      inputTheme = {
        border: 'none',
        backgroundColor: `${colors.navy2}`,
      };
      break;
    case 'success':
      inputTheme = {
        border: `1px solid #BE28F3`,
      };
      break;
  }

  return (
    <div>
      <div>
        <StyledInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ ...inputTheme }}
        />
        {right && <div>{right()}</div>}
      </div>
      {guideMessage && <div>{guideMessage}</div>}
    </div>
  );
};

const StyledInput = styled.input`
  padding: 14px 16px;
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

export default TextInput;
