import { ComboBoxProps } from '@react-types/combobox';
import { useRef } from 'react';
import { useButton, useComboBox, useFilter } from 'react-aria';
import { useComboBoxState } from 'react-stately';
import { styled } from 'styled-components';
import Popover from '../Popover/Popover';
import ListBox from '../ListBox/ListBox';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  gap: 2px;
`;

export const Label = styled.label`
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`;

type InputGroupProps = { isFocused?: boolean; isOpen?: boolean };
const InputGroup = styled.div<InputGroupProps>`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  width: 200px;
`;

type InputProps = { isFocused?: boolean; isOpen?: boolean };
const Input = styled.input<InputProps>`
  padding: 0.5rem 0.8rem;
  border-radius: 0.4rem 0 0 0.4rem;
  border: 1px solid ${(props) => (props.isFocused ? '#2196f3' : '#9e9e9e')};
  border-right: none;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  outline: none;
  flex: 1;
  width: 0;

  &:disabled {
    background: #fafafa;
    border-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  background: #2196f3;
  color: white;
  border: 1px solid #2196f3;
  outline: none;
  border-radius: 0 0.4rem 0.4rem 0;

  &:hover {
    background: #1e88e5;
    border-color: #1e88e5;
  }

  &:disabled {
    background: #90caf9;
    border-color: #90caf9;
    cursor: not-allowed;
  }
`;

export default function ComboBox<T extends object>(props: ComboBoxProps<T>) {
  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({ ...props, defaultFilter: contains });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listBoxRef = useRef<HTMLUListElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps,
  } = useComboBox({ ...props, inputRef, buttonRef, listBoxRef, popoverRef }, state);

  const { buttonProps } = useButton(triggerProps, buttonRef);

  return (
    <Wrapper>
      <Label {...labelProps}>{props.label}</Label>
      <InputGroup isFocused={state.isFocused}>
        <Input {...inputProps} ref={inputRef} isFocused={state.isFocused} />
        <Button {...buttonProps} ref={buttonRef}>
          v
        </Button>
      </InputGroup>
      {state.isOpen && (
        <Popover popoverRef={popoverRef} triggerRef={inputRef} state={state} isNonModal placement="bottom start">
          <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
        </Popover>
      )}
    </Wrapper>
  );
}
