import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const AppMenu: FC = () => {
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
    ],
    [t],
  );

  const _handleBtnClick = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate],
  );

  return (
    <>
      {menuItems.map((i) => (
        <MenuItem key={i.content} onClick={() => _handleBtnClick(i.path)}>
          <ListItemText>{i.content}</ListItemText>
        </MenuItem>
      ))}
    </>
  );
};

export default AppMenu;
