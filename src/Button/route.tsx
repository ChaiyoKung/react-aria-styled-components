import { styled } from 'styled-components';
import Button from './Button';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`;

export default function ButtonRoute() {
  return (
    <Stack>
      <Button onPress={() => alert('Normal')}>Normal</Button>
      <Button onPress={() => alert('Normal')} isDisabled>
        Disabled
      </Button>
    </Stack>
  );
}
