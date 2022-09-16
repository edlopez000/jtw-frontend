import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Content } from 'antd/lib/layout/layout';
import { Route, Routes } from 'react-router-dom';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import { AuthenticatedRoute } from './components/AuthenticatedRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import UserPage from './pages/UserPage';
import useAuth, { AuthProvider } from './utils/useAuth';

function App() {
  const { user, loading, error, signIn, registerUser, setUserInfo } = useAuth();

  return (
    <div className="App">
      <AuthProvider
        value={{ user, loading, error, signIn, registerUser, setUserInfo }}
      >
        <Layout style={{ height: '100vh' }}>
          <AppHeader />
          <Content>
            <Routes>
              <Route element={<AppBody />}>
                <Route path="/" element={<Welcome />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route element={<AuthenticatedRoute />}>
                  <Route path="user" element={<UserPage />} />
                </Route>
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
