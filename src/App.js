import { createBrowserHistory } from '@remix-run/router';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import CONSTANTS from "./common/constants.json"
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './component/PrivateRoute';
import Page404 from './error-component/Page404';

function App() {
  const history = createBrowserHistory()
  return (
    <>
      <Router history={history}>
        <Routes>
            <Route exact path={CONSTANTS.ROUTES.DASHBOARD} element={<PrivateRoute />}>
              <Route exact path={CONSTANTS.ROUTES.DASHBOARD} element={<Dashboard />} />
            </Route>
            <Route exact path={CONSTANTS.ROUTES.LOGIN} element={<Login />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
