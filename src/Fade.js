import React from 'react'
import Transition from 'react-transition-group/Transition';
import logo from './img/bear.svg'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]

      }}
      >
        <img id='logo1' src={logo} alt='bear.icon' />
        <p
          style={{
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',

          }}><b />Fill in the empty field beneath. </p>
      </div>
    )}
  </Transition>
);

export default Fade
