import useAuth, { AuthProvider } from './src/utils/useAuth';
import { cleanup, render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { afterEach } from 'vitest';
import { BrowserRouter, Route } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

const Providers = ({ children }: any) => {
  const { user, loading, error, signIn, registerUser, setUserInfo } = useAuth();
  return (
    <BrowserRouter>
      <AuthProvider
        value={{ user, loading, error, signIn, registerUser, setUserInfo }}
      >
        {children}
      </AuthProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
