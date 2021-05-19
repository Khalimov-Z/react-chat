import React from 'react';
import InformationBar from '../InformationBar';
import Sidebar from '../Sidebar';
import Main from '../Main';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Main />
      <InformationBar />
    </div>
  );
}

export default App;
