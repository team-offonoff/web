import { InputHTMLAttributes, Ref, forwardRef } from 'react';
import { useUID } from 'react-uid';

import { OptionContainer, OptionInput, OptionLabel } from './ToggleSwitch.styles';

function SwitchItem(
  {
    className,
    children,
    checked,
    id: elementId,
    ...rest
  }: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
  forwardedRef: Ref<HTMLInputElement>
) {
  const id = useUID();

  return (
    <OptionContainer>
      <OptionInput
        className="visually-hidden radio-option__input"
        id={id}
        type="radio"
        checked={checked}
        ref={forwardedRef}
        {...rest}
      />
      <OptionLabel className="radio-option__label" htmlFor={id} checked={checked || false}>
        <span>{children}</span>
      </OptionLabel>
    </OptionContainer>
  );
}

export default forwardRef(SwitchItem);
