import React, { useState } from 'react';

import useFunnel from '@hooks/useFunnel';

import 가입성공 from './가입성공';
import 약관동의 from './약관동의';
import 정보입력 from './정보입력';

const Signup = () => {
  const [registerData, setRegisterData] = useState();
  const [currentStep, setCurrentStep] = useState('정보입력'); // Add currentStep state
  const [Funnel, setStep] = useFunnel(['가입방식', '주민번호', '집주소', '가입성공']);
  const steps = ['정보입력', '약관동의', '가입성공'];

  return (
    <>
      {currentStep === '정보입력' && <정보입력 />}
      {currentStep === '약관동의' && <약관동의 />}
      {currentStep === '가입성공' && <가입성공 />}
    </>
  );
};

export default Signup;
