import React, { useState } from 'react';

import useFunnel from '@hooks/useFunnel';

import 가입성공 from './가입성공';
import 약관동의 from './약관동의';
import 정보입력 from './정보입력';

const Signup = () => {
  const [registerData, setRegisterData] = useState();
  const [Funnel, setStep] = useFunnel(['가입방식' | '주민번호' | '집주소' | '가입성공']);

  return (
    <></>
    // <Funnel>
    //   <Funnel.Step name="정보입력">
    //     <정보입력 />
    //   </Funnel.Step>
    //   <Funnel.Step name="약관동의">
    //     <약관동의 />
    //   </Funnel.Step>
    //   <Funnel.Step name="가입성공">
    //     <가입성공 />
    //   </Funnel.Step>
    // </Funnel>
  );
};

export default Signup;
