import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { ConfigKeys } from 'src/constants/form';
import { styled } from 'styled-components';

import { Row } from '../Flex/Flex';

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
  const { register, watch } = useFormContext();

  return (
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
  );
};

export default RadioInput;
