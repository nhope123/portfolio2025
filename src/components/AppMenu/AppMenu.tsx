import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { type FC, type MouseEvent, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { type AppMenuProps } from './types.ts';

const AppMenu: FC<AppMenuProps> = ({ onMenuItemClick }) => {
  const { t } = useTranslation(['translation']);
  const navigate = useNavigate();

  const menuItems = useMemo(
    () => [
      {
        content: t('menu.home'),
        path: '/',
      },
      {
        content: t('menu.projects'),
        path: '/projects',
      },
      {
        content: t('menu.aboutMe'),
        path: '/about-me',
      },
      {
        content: t('menu.skills'),
        path: '/skills',
      },
      {
        content: t('menu.contact'),
        path: '/contact',
      },
    ],
    [t],
  );

  const _handleBtnClick = useCallback(
    (e: MouseEvent<HTMLLIElement>, path: string) => {
      if (onMenuItemClick) onMenuItemClick(e);
      navigate(path);
    },
    [navigate, onMenuItemClick],
  );

  return (
    <>
      {menuItems.map((i) => (
        <MenuItem key={i.content} onClick={(e) => _handleBtnClick(e, i.path)}>
          <ListItemText>{i.content}</ListItemText>
        </MenuItem>
      ))}
    </>
  );
};

export default AppMenu;
