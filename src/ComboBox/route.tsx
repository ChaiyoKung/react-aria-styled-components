import { styled } from 'styled-components';
import ComboBox from './ComboBox';
import { Item } from 'react-stately';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding: 12px;
`;

export default function ComboBoxRoute() {
  return (
    <Stack>
      <ComboBox label="Number (Normal)">
        <Item key="one">One</Item>
        <Item key="two">Two</Item>
        <Item key="three">Three</Item>
        <Item key="four">Four</Item>
        <Item key="five">Five</Item>
        <Item key="six">Six</Item>
        <Item key="seven">Seven</Item>
        <Item key="eight">Eight</Item>
        <Item key="nine">Nine</Item>
        <Item key="ten">Ten</Item>
      </ComboBox>

      <ComboBox label="Number (Disabled)" isDisabled>
        <Item key="one">One</Item>
        <Item key="two">Two</Item>
        <Item key="three">Three</Item>
        <Item key="four">Four</Item>
        <Item key="five">Five</Item>
        <Item key="six">Six</Item>
        <Item key="seven">Seven</Item>
        <Item key="eight">Eight</Item>
        <Item key="nine">Nine</Item>
        <Item key="ten">Ten</Item>
      </ComboBox>
    </Stack>
  );
}
