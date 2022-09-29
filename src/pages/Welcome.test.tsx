import { describe, expect, test } from 'vitest';
import { screen, render, waitFor } from '../../testUtils';
import Welcome from './Welcome';

describe('Welcome component', () => {
  test('should display welcome text', async () => {
    render(<Welcome />);
    await waitFor(() => {
      expect(screen.getByText('Howdy!')).toBeInTheDocument();
    });
  });

  test('should render bio', async () => {
    render(<Welcome />);
    await waitFor(() => {
      expect(
        screen.getByText(
          'Welcome to a small practice app where I explore JSON Web Token for protecting API routes and user authentication.'
        )
      ).toBeInTheDocument();
    });
  });

  test('should render login/signup button', async () => {
    render(<Welcome />);
    await waitFor(() => {
      expect(screen.getByText('Log In')).toBeInTheDocument();
      expect(screen.getByText('Sign Up')).toBeInTheDocument();
    });
  });
});
