import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useFunnel from '@hooks/useFunnel/useFunnel';

import 가입성공 from './가입성공';
import 정보입력 from './정보입력';

const Signup = () => {
  const steps = ['정보입력', '가입성공'];

  const [Funnel, setStep] = useFunnel(steps);
  const location = useLocation();
  const [registerData, setRegisterData] = useState();

  return (
    <Funnel>
      <Funnel.Step name="정보입력">
        <정보입력 memberId={location.state.memberId} />
      </Funnel.Step>
      <Funnel.Step name="가입성공">
        <가입성공 />
      </Funnel.Step>
    </Funnel>
  );
};

export default Signup;
