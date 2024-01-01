import { RegisterOptions } from 'react-hook-form';

interface ConfigField {
  options: RegisterOptions;
}

export const INPUT_TYPE = {
  NICKNAME: 'NICKNAME',
  BIRTHDAY: 'BIRTHDAY',
} as const;

export type ConfigKeys = keyof typeof INPUT_TYPE;

export const CONFIG: Record<ConfigKeys, ConfigField> = {
  NICKNAME: {
    options: {
      pattern: {
        value: /^[가-힣a-zA-Z0-9]+$/,
        message: '한글, 영문, 숫자만 가능해요.',
      },
      maxLength: {
        value: 8,
        message: '닉네임은 8자리 이내로 입력해주세요.',
      },
    },
  },
  BIRTHDAY: {
    options: {
      pattern: /^[가-힣a-zA-Z0-9]{1,8}$/,
      maxLength: 8,
    },
  },
} as const;
