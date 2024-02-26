import React, { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { useModifyProfile } from '@apis/profile/useProfile';
import DefaultButton from '@components/commons/Button/DefaultButton';
import { Col, Row } from '@components/commons/Flex/Flex';
import InputField from '@components/commons/InputField/InputField';
import Layout from '@components/commons/Layout/Layout';
import SelectInput from '@components/commons/SelectInput/SelectInput';
import Text from '@components/commons/Text/Text';
import TextInput from '@components/commons/TextInput/TextInput';
import { theme1, theme2 } from '@components/commons/TextInput/theme';
import { Toast } from '@components/commons/Toast/Toast';
import { ModifyProfileRequestDTO } from '@interfaces/api/profile';

import { CONFIG, INPUT_TYPE } from '@constants/form';
import { JOBS } from '@constants/signup';

import { colors, theme } from '@styles/theme';

import { RightChevronIcon } from '@icons/index';

import { ResponseError } from '@apis/fetch';

import { BackButton, Container, Divider, SubmitButton } from './ModifyProfile.styles';

interface ModifyProfileProps {
  birth: string;
  gender: string;
}

const MAX_NICKNAME_LENGTH = 8;

const ModifyProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { birth, gender } = location.state as ModifyProfileProps;

  const methods = useForm<ModifyProfileRequestDTO>({ mode: 'onChange' });
  const modifyProfileMutation = useModifyProfile();

  const nicknameProgress = methods.watch(INPUT_TYPE.NICKNAME)
    ? `${Array.from(methods.watch(INPUT_TYPE.NICKNAME)).length}/${MAX_NICKNAME_LENGTH}`
    : '';

  const handleSubmitForm = async () => {
    const data = methods.getValues();
    try {
      const res = await modifyProfileMutation.mutateAsync({
        nickname: data.nickname,
        job: data.job,
      });
      console.log(res);
      navigate(-1);
    } catch (error) {
      console.log(error);
      if (error instanceof ResponseError) {
        Toast.error(error.errorData.errorContent.message);
      }
    }
  };

  return (
    <Layout
      hasBottomNavigation={false}
      HeaderLeft={
        <BackButton onClick={() => navigate(-1)}>
          <RightChevronIcon style={{ transform: 'rotate(180deg)' }} stroke={colors.white} />
        </BackButton>
      }
      HeaderCenter={
        <Text size={20} weight={600} color={colors.white}>
          내 정보 수정
        </Text>
      }
    >
      <FormProvider {...methods}>
        <Container>
          <Col gap={24} alignItems="flex-start">
            <Col gap={20} alignItems="flex-start">
              <Row gap={12} alignItems="center">
                <Text size={14} weight={600} color={colors.white_40}>
                  생년월일
                </Text>
                <Text size={14} weight={400} color={colors.white_60}>
                  {birth}
                </Text>
              </Row>
              <Row gap={12} alignItems="center">
                <Text size={14} weight={600} color={colors.white_40}>
                  성별
                </Text>
                <Text size={14} weight={400} color={colors.white_60}>
                  {gender}
                </Text>
              </Row>
            </Col>
            <Divider />
            <Col gap={40} alignItems="flex-start" justifyContent="space-between">
              <InputField label="변경할 닉네임을 입력해 주세요">
                <TextInput
                  id={INPUT_TYPE.NICKNAME}
                  theme={theme1}
                  options={CONFIG.NICKNAME.options}
                  placeholder={'한글, 영문, 숫자 최대 8자'}
                  right={() => (
                    <Text size={14} weight={700} color={colors.purple_60}>
                      {nicknameProgress}
                    </Text>
                  )}
                />
              </InputField>
              <InputField label="변경할 직업을 입력해 주세요">
                <SelectInput
                  id={INPUT_TYPE.JOB}
                  options={CONFIG.JOB.options}
                  placeholder="직업 선택하기"
                  selectOptions={JOBS}
                />
              </InputField>
            </Col>
          </Col>
          <SubmitButton>
            <DefaultButton
              title={'변경하기'}
              onClick={handleSubmitForm}
              disabled={!methods.formState.isValid}
            />
          </SubmitButton>
        </Container>
      </FormProvider>
    </Layout>
  );
};

export default ModifyProfile;
