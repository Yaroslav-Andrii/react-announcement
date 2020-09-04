import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AnnouncementForm } from './components/AnnouncementFrom';
import { AnnouncementList } from './components/AnnouncementList';
import { Announcement } from './components/Announcement';
import { NavBar } from './components/NavBar';
import { NotFoundPage } from './components/NotFoundPage';
import { ROOT } from './rootUrl';

function App() {
  return (
    <BrowserRouter>
      <NavBar root={ROOT}/>
      <div className="container">
        <Switch>
          <Route path={ROOT} exact component={AnnouncementList}/>
          <Route path={`${ROOT}create`} component={AnnouncementForm}/>
          <Route path={`${ROOT}announcement/:id`} component={Announcement}/>
          <Route path={'*'} component={NotFoundPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;