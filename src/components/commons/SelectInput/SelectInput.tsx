import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

import { InputType } from '@constants/form';

import { colors } from '@styles/theme';

import { DownChevronIcon } from '@icons/index';

import Text from '../Text/Text';
import { ErrorMessage } from '../TextInput/TextInput.styles';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectInputProps {
  id: InputType;
  options: RegisterOptions;
  selectOptions: SelectOption[];
  placeholder: string;
}

const StyledSelect = styled.select<{ selected: boolean }>`
  width: 100%;
  padding: 14px 16px;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.purple};
  appearance: none;
  background-color: #342b52;
  border: none;
  border-radius: 10px;
  opacity: 0.6;

  &:focus {
    outline: none;
  }
`;

const SelectLabel = styled.label`
  position: absolute;
  top: 12px;
  right: 12px;
  pointer-events: none;
`;

const SelectInput = (props: SelectInputProps) => {
  const { id, options, selectOptions, placeholder } = props;
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div style={{ position: 'relative' }}>
      <SelectLabel htmlFor={id}>
        <DownChevronIcon />
      </SelectLabel>
      <StyledSelect {...register(id, options)} selected={watch(id) !== undefined} id={id}>
        <option value="" disabled selected style={{ display: 'none' }}>
          {placeholder}
        </option>
        {selectOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
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

export default SelectInput;
