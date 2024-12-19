import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { type SxProps, type Theme } from '@mui/material/styles';
import { FC, useRef, useState } from 'react';

import AppMenu from './AppMenu.tsx';

const slotPropsSx: SxProps<Theme> = {
  paper: {
    sx: {
      minWidth: '250px',
      display: { xs: 'flex', md: 'none' },
      p: 1,
      '& ul, & button': { width: '100%' },
    },
  },
};

const rootSx: SxProps<Theme> = {
  flexGrow: 1,
  display: { xs: 'flex', md: 'none' },
  visibility: { xs: 'visible', md: 'collapse' },
};

const MobileMenu: FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Box sx={rootSx}>
      <IconButton
        aria-controls="menu-app-bar"
        aria-haspopup="menu"
        aria-label="mobile menu button"
        color="inherit"
        onClick={() => setOpenMobileMenu(true)}
        size="large"
        ref={buttonRef}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-app-bar"
        anchorEl={buttonRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        slotProps={slotPropsSx}
      >
        <AppMenu onMenuItemClick={() => setOpenMobileMenu(false)} />
      </Menu>
    </Box>
  );
};

export default MobileMenu;
