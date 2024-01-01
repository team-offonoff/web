/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { ConfigKeys } from 'src/constants/form';
import { styled } from 'styled-components';

import { colors } from '@styles/theme';

interface TextInputProps {
  id: ConfigKeys;
  options: RegisterOptions;
  placeholder: string;
  left?: () => React.ReactNode;
  right?: () => React.ReactNode;
}

const StyledInput = styled.input`
  padding: 14px 16px;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple};
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const TextInput = (props: TextInputProps) => {
  const { id, options, placeholder, left, right } = props;
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const inputTheme = {
    default: {
      border: `1px solid ${colors.sub_purple}`,
      backgroundColor: 'transparent',
    },
    success: {
      border: 'none',
      backgroundColor: `${colors.navy2}`,
    },
    error: {
      border: `1px solid #BE28F3`,
      backgroundColor: 'transparent',
    },
  };

  return (
    <div>
      <div>
        {left && <div>{left()}</div>}
        <StyledInput
          type="text"
          style={
            watch(id)?.length > 0
              ? errors.root
                ? inputTheme.error
                : inputTheme.success
              : inputTheme.default
          }
          placeholder={placeholder}
          {...register(id, options)}
        />
        {right && <div>{right()}</div>}
      </div>
      {errors[id] && <div>{errors[id]?.message?.toString()}</div>}
    </div>
  );
};

export default TextInput;
