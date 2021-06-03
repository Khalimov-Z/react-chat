import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../app.module.css';
import InformationBar from '../../InformationBar';

function AnimationBar ({showProfile}) {
  return (
    <div>
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
    </div>
  );
}

export default AnimationBar;