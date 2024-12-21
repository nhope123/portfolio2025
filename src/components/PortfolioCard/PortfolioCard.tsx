import GitHub from '@mui/icons-material/GitHub';
import WebRounded from '@mui/icons-material/WebRounded';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { SxProps, Theme } from '@mui/material/styles';
import type { PortfolioCardProps } from './types.ts';

const rootSx: SxProps<Theme> = {
  maxWidth: 345,
  width: '100%',
};

const imageSx: SxProps<Theme> = {
  // height: 140,
  // aspectRatio: '345/140',
  // top: 0,
}

const PortfolioCard: FC<PortfolioCardProps> = (props) => {
  const { description, imageUrl, repositoryUrl, name, homepageUrl } = props;
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
        color: 'secondary' as IconButtonProps['color'],
        title: t('generic.website'),
        url: homepageUrl,
        icon: <WebRounded />,
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
        // height={140}
        // width={345}
        sx={imageSx}
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
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
      </CardActions>
    </Card>
  );
};

export default PortfolioCard;
