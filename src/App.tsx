import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Route, Routes } from 'react-router-dom';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import { AuthenticatedRoute } from './components/AuthenticatedRoute';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import NotFound from './pages/NotFound';
import PasswordReset from './pages/PasswordReset';
import SplashPage from './pages/SplashPage';
import UserPage from './pages/UserPage';
import useAuth, { AuthProvider } from './utils/useAuth';

function App() {
  const { user, loading, error, signIn, registerUser, setUserInfo } = useAuth();

  return (
    <div className="App">
      <AuthProvider
        value={{ user, loading, error, signIn, registerUser, setUserInfo }}
      >
        <Layout style={{ height: '100vh', width: '100vw' }}>
          <AppHeader />
          <Content>
            <Routes>
              <Route element={<AppBody />}>
                <Route path="/" element={<SplashPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route
                  path="/user"
                  element={
                    <AuthenticatedRoute>
                      <UserPage />
                    </AuthenticatedRoute>
                  }
                />
                <Route
                  path="/changepassword"
                  element={
                    <AuthenticatedRoute>
                      <PasswordReset />
                    </AuthenticatedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Content>
          <AppFooter />
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
