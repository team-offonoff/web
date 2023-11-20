import React, { useState } from 'react';

import 가입성공 from './가입성공';
import 약관동의 from './약관동의';
import 정보입력 from './정보입력';

const Signup = () => {
  const [registerData, setRegisterData] = useState();
  const [step, setStep] = useState<'정보입력' | '약관동의' | '가입성공'>('정보입력');

  return (
    <main>
      {step === '정보입력' && <정보입력 />}
      {step === '약관동의' && <약관동의 />}
      {step === '가입성공' && <가입성공 />}
    </main>
  );
};

export default Signup;
