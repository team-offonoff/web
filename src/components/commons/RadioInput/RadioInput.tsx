import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { ConfigKeys } from 'src/constants/form';
import { styled } from 'styled-components';

import { colors } from '@styles/theme';

import { Row } from '../Flex/Flex';
import Text from '../Text/Text';
import { ErrorMessage } from '../TextInput/TextInput.styles';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioInputProps {
  id: ConfigKeys;
  options: RegisterOptions;
  radioOptions: RadioOption[];
}

const RadioLabel = styled.label<{ checked: boolean }>`
  width: 100%;
  padding: 18px 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple};
  text-align: center;
  background-color: ${({ checked, theme }) => (checked ? theme.colors.sub_navy2 : 'transparent')};
  border: 1px solid ${({ theme }) => theme.colors.sub_purple};
  border-radius: 10px;
`;

const RadioInput = (props: RadioInputProps) => {
  const { id, options, radioOptions } = props;
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div style={{ position: 'relative' }}>
      <Row gap={10}>
        {radioOptions.map((option, index) => (
          <RadioLabel key={index} checked={watch(id) === option.value}>
            <input
              type="radio"
              {...register(id, options)}
              value={option.value}
              checked={watch(id) === option.value}
              style={{ display: 'none' }}
            />
            {option.label}
          </RadioLabel>
        ))}
      </Row>
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

export default RadioInput;
