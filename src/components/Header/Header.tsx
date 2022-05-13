import {
  Burger,
  Header as MantineHeader,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core';
import React from 'react';

export interface HeaderProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({ opened, setOpened }) => {
  const theme = useMantineTheme();

  return (
    <MantineHeader height={70} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </MantineHeader>
  );
};
