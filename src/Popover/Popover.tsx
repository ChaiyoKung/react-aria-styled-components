import { OverlayTriggerState } from 'react-stately';
import { AriaPopoverProps } from '@react-aria/overlays';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import { ReactNode, RefObject, useRef } from 'react';
import { styled } from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  z-index: 1;
  width: 200px;
  border: 1px solid #e0e0e0;
  border-radius: 0.4rem;
  margin-top: 6px;
  box-shadow: 0 4px 8px #eeeeee;
  background: white;
`;

export interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: ReactNode;
  state: OverlayTriggerState;
  popoverRef?: RefObject<HTMLDivElement>;
}

export default function Popover(props: PopoverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { popoverRef = ref, state, children, isNonModal } = props;

  const { popoverProps, underlayProps } = usePopover({ ...props, popoverRef }, state);

  return (
    <Overlay>
      {!isNonModal && <ModalOverlay {...underlayProps} />}
      <Wrapper {...popoverProps} ref={popoverRef}>
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </Wrapper>
    </Overlay>
  );
}
