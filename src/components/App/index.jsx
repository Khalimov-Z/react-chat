import { useEffect } from 'react';
import InformationBar from '../InformationBar';
import Sidebar from '../Sidebar';
import Main from '../Main';
import styles from './app.module.css';
import { Switch, Route } from 'react-router-dom';
import { loadProfile } from '../../redux/ducks/application';
import { useDispatch } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';

function App() {
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
          <Main />
          <InformationBar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
