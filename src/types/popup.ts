import React from 'react';

export type PopupProps = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export interface IPopupProps {
  open: boolean;
  children: React.ReactNode;
}
