import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import useFunnel from '@hooks/useFunnel/useFunnel';

import 가입성공 from './가입성공';
import 약관동의 from './약관동의';
import 정보입력 from './정보입력';

const Signup = () => {
  const { state } = useLocation();

  const [registerData, setRegisterData] = useState();
  const steps = ['정보입력', '약관동의', '가입성공'];
  const [Funnel, setStep] = useFunnel(steps);

  return (
    <Funnel>
      <Funnel.Step name="정보입력">
        <정보입력 />
        <button onClick={() => setStep('약관동의')}>다음</button>
      </Funnel.Step>
      <Funnel.Step name="약관동의">
        <약관동의 />
        <button onClick={() => setStep('가입성공')}>다음</button>
      </Funnel.Step>
      <Funnel.Step name="가입성공">
        <가입성공 />
      </Funnel.Step>
    </Funnel>
  );
};

export default Signup;
