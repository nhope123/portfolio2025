import GitHub from '@mui/icons-material/GitHub';
import PublicRounded from '@mui/icons-material/PublicRounded';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { SxProps, Theme } from '@mui/material/styles';
import type { PortfolioCardProps } from './types.ts';

const rootSx: SxProps<Theme> = {
  maxWidth: 345,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const imageSx: SxProps<Theme> = {
  // height: 140,
  aspectRatio: '1.5', // '345/140',
  // top: 0,
};

const actionSx: SxProps<Theme> = {
  bottom: 0,
  display: 'flex',
  justifyContent: 'space-between',
  flexGrow: 0,
};

const PortfolioCard: FC<PortfolioCardProps> = (props) => {
  const { description, imageUrl, repositoryUrl, name, homepageUrl, createdAt } =
    props;
  const { t } = useTranslation('translation');

  const actionButtons = useMemo(
    () => [
      {
        color: 'primary' as IconButtonProps['color'],
        title: t('generic.github'),
        url: repositoryUrl,
        icon: <GitHub />,
      },
      {
        color: 'primary' as IconButtonProps['color'],
        title: t('generic.website'),
        url: homepageUrl,
        icon: <PublicRounded />,
      },
    ],
    [repositoryUrl, t, homepageUrl],
  );

  const _handleClick = useCallback((url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  }, []);

  return (
    <Card sx={rootSx}>
      {/* Media */}
      <CardMedia
        alt={`${name} card`}
        component="img"
        image={imageUrl}
        sx={imageSx}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={actionSx}>
        <Stack direction={'row'}>
          {actionButtons.map(({ icon, url, ...rest }) => (
            <IconButton
              {...rest}
              disabled={!url}
              key={url}
              onClick={() => _handleClick(url)}
            >
              {icon}
            </IconButton>
          ))}
        </Stack>
        <Typography variant="caption" color="text.secondary">
          {createdAt}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default PortfolioCard;
