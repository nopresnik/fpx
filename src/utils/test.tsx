import { MantineProvider } from '@mantine/core';
import { render, RenderResult } from '@testing-library/react';
import React from 'react';

export const renderTestComponent = (
  children: React.ReactElement
): RenderResult => {
  return render(<MantineProvider>{children}</MantineProvider>);
};
