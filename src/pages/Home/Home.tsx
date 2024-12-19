import Box from '@mui/material/Box';
import { default as Button, type ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {
  useColorScheme,
  type SupportedColorScheme,
  type SxProps,
  type Theme,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import type { ColorSchemeContextValue } from '@mui/system';
import { memo, useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const rootSx: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: 'background.default',
  color: 'text.primary',
  p: 3,
};

const Home = () => {
  const { t } = useTranslation(['translation']);
  const { mode, setMode }: ColorSchemeContextValue<SupportedColorScheme> =
    useColorScheme();
  const navigate = useNavigate();

  const actionButtons: Partial<ButtonProps>[] = useMemo(
    () => [
      {
        color: 'primary',
        onClick: () => navigate('/projects'),
        size: 'large',
        children: `${t('home.button1')}`,
        variant: 'contained',
      },
      {
        color: 'secondary',
        component: 'a',
        href: '/resume.pdf',
        size: 'large',
        target: '_blank',
        children: `${t('home.button2')}`,
        variant: 'outlined',
      },
    ],
    [navigate, t],
  );

  if (!mode) {
    return null;
  }

  return (
    <Box sx={rootSx}>
      <Stack spacing={3} alignItems="center">
        {/* Greeting */}
        <Typography variant="h4" fontWeight="bold">
          {t('home.greeting')}
          <Typography
            variant="h4"
            fontWeight="bold"
            component="span"
            fontStyle={'italic'}
            color="primary"
          >
            {t('home.author')}
          </Typography>
          👋
        </Typography>

        {/* Role Description */}
        <Typography variant="h2" fontWeight="700" lineHeight={1.0}>
          {t('home.role')}
        </Typography>
        <Typography variant="h2" fontWeight="700" lineHeight={1.0}>
          {t('home.description')}
        </Typography>

        {/* Short About */}
        <Typography variant="h6" sx={{ maxWidth: '600px' }}>
          <Trans>{t('home.intro')}</Trans>
        </Typography>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          {actionButtons.map((i) => (
            <Button key={i.children?.toString()} {...i}>
              {i.children}
            </Button>
          ))}
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              const nextMode = mode === 'light' ? 'dark' : 'light';
              setMode(nextMode);
            }}
          >
            {`${t('home.button1')}`}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            href="/resume.pdf"
            target="_blank"
          >
            {t('home.button2')}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default memo(Home);
