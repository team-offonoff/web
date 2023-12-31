import { useCallback, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import Funnel, { FunnelProps } from './Funnel';
import Step, { StepProps } from './Step';

const PARAMS_KEY = 'funnel-step';

const useFunnel = <Steps extends string[]>(
  steps: Steps
): [
  ((props: Omit<FunnelProps<Steps>, 'steps' | 'step'>) => JSX.Element) & {
    Step: <Steps extends string[]>({ onEnter, children }: StepProps<Steps>) => JSX.Element;
  },
  (step: Steps[number]) => void,
] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const step = searchParams.get(PARAMS_KEY) ?? steps[0];

  const FunnelComponent = Object.assign(
    (props: Omit<FunnelProps<Steps>, 'steps' | 'step'>) => {
      return <Funnel<Steps> steps={steps} step={step} {...props} />;
    },
    { Step }
  );

  const setStep = useCallback(
    (step: Steps[number]) => {
      setSearchParams(
        (searchParams) => {
          searchParams.set('funnel-step', step);
          return searchParams;
        },
        {
          state: { ...location.state },
        }
      );
    },
    [setSearchParams]
  );

  useEffect(() => {
    setStep(step);
  }, [step]);

  return [FunnelComponent, setStep];
};

export default useFunnel;
