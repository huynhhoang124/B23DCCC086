import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';  // Thanh công cụ bên trái
import ReportPage from './ReportPage';  // Trang báo cáo

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/baoCao" component={ReportPage} />
            {/* Các route khác */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
