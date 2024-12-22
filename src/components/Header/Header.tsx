import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { type SxProps, type Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import AppMenu from '../AppMenu/AppMenu.tsx';
import MobileMenu from '../AppMenu/MobileMenu.tsx';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton.tsx';

const brandSx: SxProps<Theme> = {
  fontFamily: 'Poppins, serif',
  fontWeight: 600,
  fontStyle: 'italic',
};

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
  const { t } = useTranslation(['translation']);

  return (
    <AppBar position="sticky">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <MobileMenu />
          {/* <Branding /> */}
          <Typography sx={brandSx} variant="h6">
            {`${t('home.author')} ${t('generic.authorSurname')}`}
          </Typography>
          <Box sx={rightAppBarSx}>
            <Box sx={rightMenuSx}>
              <AppMenu />
            </Box>
            <ThemeToggleButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
