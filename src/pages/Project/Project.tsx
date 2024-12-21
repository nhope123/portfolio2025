/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC, useMemo } from 'react';

import PortfolioCard from '../../components/PortfolioCard/PortfolioCard.tsx';
import { PortfolioCardProps } from '../../components/PortfolioCard/types.ts';

import getRepositories from './projectRepoQuery.ts';

import type { SxProps, Theme } from '@mui/material/styles';

const rootSx: SxProps<Theme> = {
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 3,
};

const Project: FC = () => {
  // Execute query
  const { loading, error, data } = useQuery(getRepositories, {
    variables: { username: import.meta.env.VITE_GITHUB_USERNAME },
  });

  const projectRepositories = useMemo(
    (): PortfolioCardProps[] =>
      data
        ? data.user.repositories.nodes
            .filter((rep: any) => rep.homepageUrl)
            .map((i: any) => { // TODO: create type from github api
              return {
                name: i.name
                  .split(/[\s-]/)
                  .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(' '),
                description: i.description,
                imageUrl:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fTvBqEpyLmHNzZVx0YlKR5wOxFoLRAtZxA&s', // TODO: use repo with a screenshot folder to get the image
                repositoryUrl: i.url,
                homepageUrl: i.homepageUrl,
              };
            })
        : [],
    [data],
  );

  return (
    <Stack direction="row" sx={rootSx}>
      {loading && <CircularProgress size={'3rem'} />}
      {error && <Typography variant="body2">{error.message}</Typography>}
      {data &&
        projectRepositories.map((repo: any) => (
          <PortfolioCard key={repo.name} {...repo} />
        ))}
    </Stack>
  );
};

export default Project;
