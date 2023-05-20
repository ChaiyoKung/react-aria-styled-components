import { useState } from 'react';
import ToggleButton from './ToggleButton';
import { styled } from 'styled-components';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`;

export default function ToggleButtonRoute() {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isSelected2, setIsSelected2] = useState<boolean>(false);
  const [isSelected3, setIsSelected3] = useState<boolean>(true);

  return (
    <Stack>
      <ToggleButton isSelected={isSelected} onChange={setIsSelected}>
        {isSelected ? 'Normal - On' : 'Normal - Off'}
      </ToggleButton>
      <ToggleButton isSelected={isSelected2} onChange={setIsSelected2} isDisabled>
        {isSelected2 ? 'Disabled - On' : 'Disabled - Off'}
      </ToggleButton>
      <ToggleButton isSelected={isSelected3} onChange={setIsSelected3} isDisabled>
        {isSelected3 ? 'Disabled 2 - On' : 'Disabled 2 - Off'}
      </ToggleButton>
    </Stack>
  );
}
