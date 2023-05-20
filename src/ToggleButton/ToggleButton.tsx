import { useRef } from 'react';
import { AriaToggleButtonProps, useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';
import { styled } from 'styled-components';

type StyledButtonProps = { isPressed: boolean; isSelected: boolean };
const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${(props) =>
    props.isPressed ? (props.isSelected ? '#1e88e5' : '#e0e0e0') : props.isSelected ? '#2196f3' : '#eeeeee'};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  border: none;
  outline: none;
  border-radius: 0.4rem;

  &:disabled {
    color: ${(props) => (props.isSelected ? 'white' : '#9e9e9e')};
    background-color: ${(props) => (props.isSelected ? '#90caf9' : '#eeeeee')};
  }
`;

export type ToggleButtonProps = AriaToggleButtonProps<'button'>;

export default function ToggleButton(props: ToggleButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const state = useToggleState(props);
  const { buttonProps, isPressed } = useToggleButton(props, state, ref);
  const { children } = props;

  return (
    <StyledButton {...buttonProps} isPressed={isPressed} isSelected={state.isSelected} ref={ref}>
      {children}
    </StyledButton>
  );
}
