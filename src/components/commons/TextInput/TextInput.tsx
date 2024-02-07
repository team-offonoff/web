import React, { useEffect } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { InputType } from 'src/constants/form';

import { colors } from '@styles/theme';

import Text from '../Text/Text';

import {
  ErrorMessage,
  InputContainer,
  InputPrefix,
  InputSuffix,
  StyledInput,
} from './TextInput.styles';
import { TextInputTheme, theme1 } from './theme';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: InputType;
  options: RegisterOptions;
  placeholder: string;
  left?: () => React.ReactNode;
  right?: () => React.ReactNode;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  theme?: TextInputTheme;
}

const TextInput = (props: TextInputProps) => {
  const {
    id,
    type = 'text',
    options,
    placeholder,
    maxLength,
    left,
    right,
    onKeyDown,
    theme = theme1,
  } = props;
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  const value = watch(id);

  useEffect(() => {
    if (maxLength && value?.length > maxLength) {
      setValue(id, value.slice(0, maxLength));
    }
  }, [value]);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <InputContainer inputTheme={theme} hasError={!!errors[id]}>
        {left && <InputPrefix>{left()}</InputPrefix>}
        <StyledInput
          inputTheme={theme}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          autoComplete="off"
          {...register(id, options)}
          onKeyDown={onKeyDown}
        />
        {right && <InputSuffix>{right()}</InputSuffix>}
      </InputContainer>
      <ErrorMessage>
        {errors[id] && (
          <Text size={13} weight={700} color={colors.purple2}>
            * {errors[id]?.message?.toString()}
          </Text>
        )}
      </ErrorMessage>
    </div>
  );
};

export default TextInput;
