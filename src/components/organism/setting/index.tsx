import React, { forwardRef, useRef } from 'react';
import { useOnClickOutside } from 'components/hooks';
import { IPopupProps } from 'types/popup';
import './style.scss';

export type Ref = HTMLDivElement;

const Setting = forwardRef<Ref, IPopupProps>(({ open, children }, ref) => {
  const contentRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  const trigger = triggerRef.current?.getBoundingClientRect();

  useOnClickOutside(
    trigger ? [contentRef, triggerRef] : [contentRef],
    () => {
      console.log('Click outside');
    },
    open,
  );
  const isOpen = true;

  return isOpen && <div ref={ref}>{children}</div>;
});

export default Setting;
