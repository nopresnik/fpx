import { MantineProvider, Title } from '@mantine/core';
import { DefaultLayout } from 'layouts';

function App() {
  return (
    <MantineProvider>
      <DefaultLayout>
        <Title order={1}>Hello world</Title>
      </DefaultLayout>
    </MantineProvider>
  );
}

export default App;
