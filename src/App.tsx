import Grid2 from '@mui/material/Grid2';
import { useRoutes } from 'react-router';

import Header from './components/Header/Header.tsx';
import routes from './routes.tsx';

const App = () => {
  const element = useRoutes(routes);
  return (
    <>
      <Header />
      <Grid2 container direction={'column'} spacing={2}>
        {element}
      </Grid2>
    </>
  );
};

export default App;
