import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Content } from 'antd/lib/layout/layout';
import { Route, Routes } from 'react-router-dom';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
      <Layout style={{ height: '100vh' }}>
        <AppHeader />
        <Content>
          <Routes>
            <Route path="/" element={<AppBody />}>
              <Route path="/" element={<LoginPage />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              {/* user needs will be on a protected route */}
              <Route path="user" element={<UserPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <AppFooter />
      </Layout>
    </div>
  );
}

export default App;
