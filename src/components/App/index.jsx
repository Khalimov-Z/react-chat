import React from "react";
import InformationBar from '../InformationBar';
import Sidebar from '../Sidebar';
import Main from '../Main';

function App(props) {
  return(
    <div>
    <Sidebar />
    <Main />
    <InformationBar />
    </div>
  );
}

export default App;
