import { RegisterOptions } from 'react-hook-form';

interface ConfigField {
  options: RegisterOptions;
}

export const INPUT_TYPE = {
  NICKNAME: 'NICKNAME',
  BIRTHDAY: 'BIRTHDAY',
  GENDER: 'GENDER',
  JOB: 'JOB',
} as const;

export type ConfigKeys = keyof typeof INPUT_TYPE;

export const CONFIG: Record<ConfigKeys, ConfigField> = {
  NICKNAME: {
    options: {
      required: {
        value: true,
        message: '닉네임을 입력해주세요.',
      },
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
      required: {
        value: true,
        message: '생년월일을 입력해주세요.',
      },
      pattern: {
        value: /^\d{4}\/\d{2}\/\d{2}$/,
        message: '생일은 YYYY/MM/DD 형식으로 입력해주세요.',
      },
    },
  },
  GENDER: {
    options: {
      required: {
        value: true,
        message: '성별을 선택해주세요.',
      },
    },
  },
  JOB: {
    options: {
      required: {
        value: true,
        message: '직업을 선택해주세요.',
      },
    },
  },
} as const;
