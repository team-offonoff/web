import { Children, ReactElement, ReactNode, isValidElement, useEffect, useState } from 'react';
import { JSX } from 'react/jsx-runtime';

const useFunnel = <Steps extends string[]>(steps: string[]) => {
  const [step, setStep] = useState(steps[0]);

  const FunnelComponent = Object.assign(
    ({ steps, step, ...props }: JSX.IntrinsicAttributes & FunnelProps<Steps>) => (
      <Funnel<Steps> steps={steps} step={step} {...props} />
    ),
    { Step }
  );

  return [FunnelComponent, setStep];
};

export default useFunnel;

interface FunnelProps<Steps extends string[]> {
  steps: Steps;
  step: Steps[number];
  children: Array<ReactElement> | ReactElement;
}

const Funnel = <Steps extends string[]>({ steps, step, children }: FunnelProps<Steps>) => {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((i: ReactElement) => steps.includes(i.props.name ?? '')) as Array<ReactElement>;

  const targetStep = validChildren.find((child) => child.props.name === step);

  return <>{targetStep}</>;
};

export interface StepProps<Steps extends string[]> {
  name: Steps[number];
  onEnter?: () => void;
  children: ReactNode;
}

export const Step = <Steps extends string[]>({ onEnter, children }: StepProps<Steps>) => {
  useEffect(() => {
    onEnter?.();
  }, [onEnter]);

  return <>{children}</>;
};
