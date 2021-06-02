import React from 'react';
import styles from './app.module.css';
import InformationBar from '../InformationBar';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

function AnimationInfoBar({ showProfile }) {
  return (
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
  );
}
AnimationInfoBar.propTypes = {
  showProfile: PropTypes.bool,
};

export default AnimationInfoBar;
