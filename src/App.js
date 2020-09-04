import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AnnouncementForm } from './components/AnnouncementFrom';
import { AnnouncementList } from './components/AnnouncementList';
import { Announcement } from './components/Announcement';
import { NavBar } from './components/NavBar';
import { NotFoundPage } from './components/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path={'/'} exact component={AnnouncementList}/>
        <Route path={'/create'} component={AnnouncementForm}/>
        <Route path={'/announcement/:id'} component={Announcement}/>
        <Route path={'*'} component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
}


export default App;