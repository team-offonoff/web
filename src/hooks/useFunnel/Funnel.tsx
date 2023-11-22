import { ReactElement, Children, isValidElement } from 'react';

export interface FunnelProps<Steps extends string[]> {
  steps: Steps;
  step: Steps[number];
  children: Array<ReactElement> | ReactElement;
}

const Funnel = <Steps extends string[]>({ steps, step, children }: FunnelProps<Steps>) => {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((i: ReactElement) => {
      return steps.includes(i.props.name);
    }) as Array<ReactElement>;

  const targetStep = validChildren.find((child) => {
    return child.props.name === step;
  });

  return <>{targetStep}</>;
};

export default Funnel;
