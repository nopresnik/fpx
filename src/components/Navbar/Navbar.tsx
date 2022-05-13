import { Navbar as MantineNavbar, Text } from '@mantine/core';
import React from 'react';

export interface NavbarProps {
  opened: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ opened }) => {
  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
    </MantineNavbar>
  );
};
