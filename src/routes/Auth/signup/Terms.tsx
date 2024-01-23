import React, { ChangeEvent, useState } from 'react';

import Checkbox from '@components/commons/CheckBox/CheckBox';
import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { NextButton } from './Signup.styles';

const Terms = () => {
  const [all, setAll] = useState(false);
  const [consentToTerm, setConsentToTerm] = useState(false);
  const [consentToCollectAndUseInfo, setConsentToCollectAndUseInfo] = useState(false);
  const [consetToMarketing, setConsetToMarketing] = useState(false);

  const disabled = !consentToTerm || !consentToCollectAndUseInfo;

  const handleConsetAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setAll(true);
      setConsentToTerm(true);
      setConsentToCollectAndUseInfo(true);
      setConsetToMarketing(true);
    } else {
      setAll(false);
      setConsentToTerm(false);
      setConsentToCollectAndUseInfo(false);
      setConsetToMarketing(false);
    }
  };

  const handleSubmitConsetToTerm = () => {
    if (disabled) return;
    console.log('submit');
  };

  return (
    <Col justifyContent={'space-between'} style={{ height: '100%' }}>
      <Col padding={'28px 20px'} gap={28} style={{ flex: 1 }}>
        <Row padding={'0 12px'}>
          <Checkbox id={'all'} checked={all} onChange={handleConsetAll}>
            <Text size={16} weight={400}>
              모두 동의하기
            </Text>
          </Checkbox>
        </Row>
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: colors.black_20,
          }}
        />
        <Row padding={'0 12px'}>
          <Checkbox
            id={'term'}
            checked={consentToTerm}
            onChange={(e) => setConsentToTerm(e.target.checked)}
          >
            <Text size={16} weight={400}>
              서비스 이용 약관(필수)
            </Text>
          </Checkbox>
        </Row>
        <Row padding={'0 12px'}>
          <Checkbox
            id={'info'}
            checked={consentToCollectAndUseInfo}
            onChange={(e) => setConsentToCollectAndUseInfo(e.target.checked)}
          >
            <Text size={16} weight={400}>
              개인정보 수집 및 이용동의(필수)
            </Text>
          </Checkbox>
        </Row>
        <Row padding={'0 12px'}>
          <Checkbox
            id={'marketing'}
            checked={consetToMarketing}
            onChange={(e) => setConsetToMarketing(e.target.checked)}
          >
            <Text size={16} weight={400}>
              마케팅 정보 수신 동의(선택)
            </Text>
          </Checkbox>
        </Row>
      </Col>
      <Row style={{ padding: '0 20px 48px 20px' }}>
        {/* SAFE AREA */}
        <NextButton type={'button'} disabled={disabled} onClick={handleSubmitConsetToTerm}>
          다음
        </NextButton>
      </Row>
    </Col>
  );
};

export default Terms;
