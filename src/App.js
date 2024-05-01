import './App.css';

import WebsiteLayout from './Layout/Website.Layout';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import routes from './Routes/routes';


function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route element={<WebsiteLayout><Outlet /></WebsiteLayout>}>
            {routes.map((featu) => featu.type == 'public' && (
              <Route element={featu.element} path={featu.path} exact={featu} />
            ))}
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
