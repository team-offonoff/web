import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { ConfigKeys, InputType } from 'src/constants/form';

import { colors } from '@styles/theme';

import Text from '../Text/Text';

import {
  ErrorMessage,
  InputContainer,
  InputPrefix,
  InputSuffix,
  StyledInput,
} from './TextInput.styles';

interface TextInputProps {
  id: InputType;
  options: RegisterOptions;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  left?: () => React.ReactNode;
  right?: () => React.ReactNode;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TextInput = (props: TextInputProps) => {
  const { id, type = 'text', options, placeholder, left, right, onKeyDown } = props;
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
      border: `1px solid ${colors.sub_purple2}`,
      backgroundColor: 'transparent',
    },
  };

  return (
    <div style={{ position: 'relative' }}>
      <InputContainer>
        {left && <InputPrefix>{left()}</InputPrefix>}
        <StyledInput
          type={type}
          style={{
            ...(left && { paddingLeft: 35 }),
            ...(watch(id)?.length > 0
              ? errors[id]
                ? inputTheme.error
                : inputTheme.success
              : inputTheme.default),
          }}
          placeholder={placeholder}
          {...register(id, options)}
          onKeyDown={onKeyDown}
        />
        {right && <InputSuffix>{right()}</InputSuffix>}
      </InputContainer>
      <ErrorMessage>
        {errors[id] && (
          <Text size={13} weight={700} color={colors.sub_purple2}>
            * {errors[id]?.message?.toString()}
          </Text>
        )}
      </ErrorMessage>
    </div>
  );
};

export default TextInput;
