import { AppShell, useMantineTheme } from '@mantine/core';
import { Header, Navbar } from 'components';
import React from 'react';

interface IDefaultLayoutContext {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DefaultLayoutContext = React.createContext<IDefaultLayoutContext>({
  opened: false,
  setOpened: () => {},
});

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = React.useState(false);

  return (
    <DefaultLayoutContext.Provider value={{ opened, setOpened }}>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        header={<Header opened={opened} setOpened={setOpened} />}
        navbar={<Navbar opened={opened} />}
      >
        {children}
      </AppShell>
    </DefaultLayoutContext.Provider>
  );
};
