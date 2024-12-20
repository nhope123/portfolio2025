import { type MouseEvent } from 'react';

export type AppMenuProps = {
  onMenuItemClick?: (event?: MouseEvent<HTMLLIElement> | undefined) => void;
};
