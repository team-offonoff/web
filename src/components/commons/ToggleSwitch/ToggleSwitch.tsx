import {
  InputHTMLAttributes,
  ChangeEvent,
  Children,
  cloneElement,
  ComponentProps,
  ReactElement,
  useCallback,
  memo,
} from 'react';

import SwitchItem from './SwitchItem';
import { Container, Indicator } from './ToggleSwitch.styles';

type RadioOptionElement = ReactElement<ComponentProps<typeof SwitchItem>>;

interface Props
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'disabled' | 'value' | 'defaultValue' | 'onChange' | 'name'
  > {
  children: RadioOptionElement | RadioOptionElement[];
}

function ToggleSwitch(props: Props) {
  const { children, ...otherProps } = props;

  return (
    <ControlledRadio
      {...otherProps}
      value={props.value}
      onChange={(event) => {
        props.onChange?.(event);
      }}
    >
      {children}
    </ControlledRadio>
  );
}

const ControlledRadio = memo(({ children, disabled, value, onChange, name }: Props) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
    },
    [onChange]
  );

  const checkedIndex = Children.map(children, (child) => {
    return child.props;
  }).findIndex((p) => p.value === value);

  const checked = checkedIndex !== -1;

  const numberOfChildren = Children.count(children);

  return (
    <Container>
      <Indicator
        className="radio__indicator"
        style={{
          width: `calc((100% - 4px) / ${numberOfChildren})`,
        }}
        animate={checked ? 'checked' : 'unchecked'}
        variants={{
          checked: {
            opacity: 1,
            translateX: `${checkedIndex * 100}%`,
          },
          unchecked: {
            opacity: 0,
            translateX: 0,
          },
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 1 }}
      />
      {Children.map(children, (child) => {
        return cloneElement(child, {
          name: name,
          disabled,
          checked: value === child.props.value,
          onChange: handleChange,
        });
      })}
    </Container>
  );
});

ToggleSwitch.Option = SwitchItem;

export default ToggleSwitch;
