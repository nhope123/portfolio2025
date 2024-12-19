import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { type SxProps, type Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';

import AppMenu from '../AppMenu/AppMenu.tsx';

const rightAppBarSx: SxProps<Theme> = {
  display: 'flex',
  columnGap: 2,
  justifyContent: 'flex-end',
  flexGrow: 1,
  flexShrink: 1,
};

const rightMenuSx: SxProps<Theme> = {
  flexGrow: 1,
  display: { xs: 'none', md: 'flex' },
  justifyContent: 'flex-end',
  columnGap: 1,
};

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {/* <MobileMenu /> */}
          {/* <Branding /> */}
          <Box sx={rightAppBarSx}>
            <Box sx={rightMenuSx}>
              <AppMenu />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
