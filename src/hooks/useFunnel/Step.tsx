import { ReactNode, useEffect } from 'react';

export interface StepProps<Steps extends string[]> {
  name: Steps[number];
  onEnter?: () => void;
  children: ReactNode;
}

const Step = <Steps extends string[]>({ onEnter, children }: StepProps<Steps>) => {
  useEffect(() => {
    onEnter?.();
  }, [onEnter]);

  return <>{children}</>;
};

export default Step;
