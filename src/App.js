import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AnnouncementForm } from './components/AnnouncementFrom';
import { AnnouncementList } from './components/AnnouncementList';
import { Announcement } from './components/Announcement';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path={'/'} exact component={AnnouncementList}/>
        <Route path={'/create'} component={AnnouncementForm}/>
        <Route path={'/announcement/:id'} component={Announcement}/>
      </Switch>
    </BrowserRouter>
  );
}


export default App;