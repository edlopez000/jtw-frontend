import useAuth from '../utils/useAuth';
import Dashboard from './Dashboard';
import Welcome from './Welcome';

function SplashPage() {
  const { user } = useAuth();
  const isAuthed = user ? true : false;

  if (isAuthed) {
    return <Dashboard />;
  } else {
    return <Welcome />;
  }
}

export default SplashPage;
