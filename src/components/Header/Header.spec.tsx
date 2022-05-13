import { renderTestComponent } from 'utils';
import { Header, HeaderProps } from './Header';

describe('Header component test', () => {
  it('should render correctly with default props', () => {
    const defaultProps: HeaderProps = {
      opened: true,
      setOpened: () => {},
    };

    const view = renderTestComponent(<Header {...defaultProps} />);

    expect(view).toMatchSnapshot();
  });
});
