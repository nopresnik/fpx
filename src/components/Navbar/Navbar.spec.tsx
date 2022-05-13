import { renderTestComponent } from 'utils';
import { Navbar, NavbarProps } from './Navbar';

describe('Navbar component test', () => {
  it('should render correctly with default props', () => {
    const defaultProps: NavbarProps = {
      opened: true,
    };

    const view = renderTestComponent(<Navbar {...defaultProps} />);
    expect(view).toMatchSnapshot();
  });
});
