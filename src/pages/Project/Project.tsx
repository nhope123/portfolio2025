/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import getRepositories from './projectRepoQuery.ts';

const Project: FC = () => {
  // Execute query
  const { loading, error, data } = useQuery(getRepositories, {
    variables: { username: 'nhope123' }, // Replace with your GitHub username
  });

  if (data) {
    console.log('data: ', data);
  }

  console.log('env: ', import.meta.env.VITE_GITHUB_ACCESS_TOKEN);

  return (
    <Stack>
      {loading && <CircularProgress size={'3rem'} />}
      {error && <Typography variant="body2">{error.message}</Typography>}
      {data &&
        data.user.repositories.nodes
          .filter((rep: any) => rep.homepageUrl)
          .map((repo: any) => (
            <Typography key={repo.url} variant="body1">
              {repo.name}: {repo.description} ({repo.stargazerCount} stars)
            </Typography>
          ))}
    </Stack>
  );
};

export default Project;
