import React, { useEffect, useState } from 'react';
import InformationBar from '../InformationBar';
import Sidebar from '../Sidebar';
import Main from '../Main';
import styles from './app.module.css';
import { Switch, Route } from 'react-router-dom';
import { loadProfile } from '../../redux/ducks/application';
import { useDispatch } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';
import { CSSTransition } from 'react-transition-group';

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
          <CSSTransition
            in={showProfile}
            timeout={500}
            unmountOnExit={true}
            classNames={{
              enterActive: styles['info-bar-enter-active'],
              enter: styles['info-bar-enter'],
              exitActive: styles['info-bar-exit-active'],
              exit: styles['info-bar-exit'],
            }}
          >
            <InformationBar />
          </CSSTransition>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
