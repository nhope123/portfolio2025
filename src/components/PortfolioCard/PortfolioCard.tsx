import GitHub from '@mui/icons-material/GitHub';
import WebRounded from '@mui/icons-material/WebRounded';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FC, useCallback, useMemo } from 'react';

import { type PortfolioCardProps } from './types.ts';

const PortfolioCard: FC<PortfolioCardProps> = (props) => {
  const { description, imageUrl, repositoryUrl, title, websiteUrl } = props;

  const actionButtons = useMemo(
    () => [
      {
        color: 'primary' as IconButtonProps['color'],
        title: 'Github repository',
        url: repositoryUrl,
        icon: <GitHub />,
      },
      {
        color: 'secondary' as IconButtonProps['color'],
        title: 'Website',
        url: websiteUrl,
        icon: <WebRounded />,
      },
    ],
    [repositoryUrl, websiteUrl],
  );

  const _handleClick = useCallback((url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  }, []);

  return (
    <Card>
      {/* Media */}
      <CardMedia alt={`${title} card`} component="img" image={imageUrl} />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {actionButtons.map(({ icon, url, ...rest }) => (
          <IconButton {...rest} key={url} onClick={() => _handleClick(url)}>
            {icon}
          </IconButton>
        ))}
      </CardActions>
    </Card>
  );
};

export default PortfolioCard;
