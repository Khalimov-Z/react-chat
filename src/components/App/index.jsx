import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Main from '../Main';
import styles from './app.module.css';
import { Switch, Route } from 'react-router-dom';
import { loadProfile } from '../../redux/ducks/application';
import { useDispatch } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';
import AnimationBar from './AnimationBar';

function App() {
  const [showProfile, setShowProfile] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
    dispatch(loadProfile());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Switch>
        <Route path="/:id?">
          <Sidebar />
          <Main setShowProfile={setShowProfile} showProfile={showProfile} />
          <AnimationBar showProfile={showProfile} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
