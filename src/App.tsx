import { Layout } from 'antd';
import 'antd/dist/antd.css';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="App">
      <Layout style={{ height: '100vh' }}>
        <AppHeader />
        <AppBody />
        <AppFooter />
      </Layout>
    </div>
  );
}

export default App;
