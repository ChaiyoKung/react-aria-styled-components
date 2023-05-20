import { useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { styled } from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #2196f3;
  color: white;
  border: none;
  outline: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: #1e88e5;
  }

  &:disabled {
    background-color: #90caf9;
    cursor: not-allowed;
  }
`;

export type ButtonProps = AriaButtonProps<'button'>;

export default function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <StyledButton {...buttonProps} ref={ref}>
      {children}
    </StyledButton>
  );
}
