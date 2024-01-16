import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { ConfigKeys, InputType } from 'src/constants/form';

import { InputTypes, colors, input } from '@styles/theme';

import Text from '../Text/Text';

import {
  ErrorMessage,
  InputContainer,
  InputPrefix,
  InputSuffix,
  StyledInput,
} from './TextInput.styles';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: InputType;
  options: RegisterOptions;
  placeholder: string;
  left?: () => React.ReactNode;
  right?: () => React.ReactNode;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  theme?: InputTypes;
}

const TextInput = (props: TextInputProps) => {
  const { id, type = 'text', options, placeholder, left, right, onKeyDown, theme = 't1' } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputTheme = input[theme];

  return (
    <div style={{ position: 'relative' }}>
      <InputContainer>
        {left && <InputPrefix>{left()}</InputPrefix>}
        <StyledInput
          hasLeft={left !== undefined}
          type={type}
          style={{ ...(errors[id] ? inputTheme.error : inputTheme.default) }}
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
