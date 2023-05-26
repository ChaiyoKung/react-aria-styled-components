import { AriaListBoxOptions } from '@react-aria/listbox';
import { Node } from '@react-types/shared';
import { ListState } from 'react-stately';
import { useListBox, useOption } from 'react-aria';
import { RefObject, useRef, HTMLAttributes, createContext } from 'react';
import { styled } from 'styled-components';

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  listBoxRef?: RefObject<HTMLUListElement>;
  state: ListState<unknown>;
}

interface OptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

const List = styled.ul`
  list-style: none;
  max-height: 300px;
  overflow: auto;
  padding: 0;
  margin: 4px 0;
  outline: none;
  width: 100%;
`;

interface ListItemProps {
  isFocused?: boolean;
  isSelected?: boolean;
}

const ListItem = styled.li<ListItemProps>`
  background: ${(props) => (props.isFocused ? '#2196f3' : '')};
  color: ${(props) => (props.isFocused ? 'white' : props.isSelected ? '#2196f3' : 'black')};
  font-weight: ${(props) => (props.isSelected ? '600' : 'normal')};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  padding: 8px;
  cursor: default;
  outline: none;
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;
`;

export default function ListBox(props: ListBoxProps) {
  const ref = useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <List {...listBoxProps} ref={listBoxRef}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </List>
  );
}

interface OptionContextValue {
  labelProps: HTMLAttributes<HTMLElement>;
  descriptionProps: HTMLAttributes<HTMLElement>;
}

const OptionContext = createContext<OptionContextValue>({
  labelProps: {},
  descriptionProps: {},
});

function Option({ item, state }: OptionProps) {
  const ref = useRef<HTMLLIElement>(null);
  const { optionProps, labelProps, descriptionProps, isSelected, isFocused } = useOption({ key: item.key }, state, ref);

  return (
    <ListItem {...optionProps} ref={ref} isFocused={isFocused} isSelected={isSelected}>
      <ItemContent>
        <OptionContext.Provider value={{ labelProps, descriptionProps }}>{item.rendered}</OptionContext.Provider>
      </ItemContent>
    </ListItem>
  );
}
