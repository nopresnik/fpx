---
to: src/components/<%= name %>/<%= name %>.spec.tsx
unless_exists: true
---
import { renderTestComponent } from 'utils';
import { <%= name %>, <%= name %>Props } from './<%= name %>';

describe('<%= name %> component test', () => {
  it('should render correctly with default props', () => {
    const defaultProps: <%= name %>Props = {};

    const view = renderTestComponent(<<%= name %> {...defaultProps} />);

    expect(view).toMatchSnapshot();
  });
});
