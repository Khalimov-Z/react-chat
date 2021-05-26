import { useEffect, useState } from 'react';
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
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    dispatch(loadContacts());
    dispatch(loadProfile());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Switch>
        <Route path="/:id?">
          <Sidebar />
          <Main setIsShow={setIsShow} isShow={isShow}/>
          {isShow && <InformationBar isShow={isShow}/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
