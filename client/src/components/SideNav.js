import React, { Component } from 'react';
import glamorous from 'glamorous';

const SidenavEl = glamorous.div(props => ({
  position: 'fixed',
  left: '0',
  top: '50px',
  width: '100%',
  height: '100%',
  paddingBottom: '50px',
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: '1000',
  transition: 'transform 0.2s cubic-bezier(0,0,0.3,1)',
  pointerEvents: props.open ? 'auto' : 'none',
  '&::before': {
    content: `' '`,
    display: 'block',
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(43, 50, 44, 0.6)',
    opacity: props.open ? 1 : 0,
    willChange: 'opacity',
    transition: 'opacity 0.2s cubic-bezier(0,0,0.3,1)',
  },
  '& .side-nav__container': {
    transform: props.open ? 'none' : 'translateX(102%)',
  },
}));

const Container = glamorous.nav({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  maxWidth: '700px',
  backgroundColor: '#000',
  marginLeft: 'auto',
  borderTop: '1px solid #fff',
  borderLeft: '1px solid #fff',
  height: '100%',
  transform: 'translateX(0)',
  transition: 'transform 0.2s cubic-bezier(0,0,0.3,1)',
  willChange: 'transform',
  padding: '1rem',
  overflowY: 'auto',
});

export default class SideNav extends Component {
  handleClick = evt => {
    if (evt.target === this.sidenav) {
      this.props.toggleMenu(evt);
    }
  };

  render() {
    const { children, open } = this.props;

    return (
      <SidenavEl
        open={open}
        innerRef={n => (this.sidenav = n)}
        onClick={this.handleClick}
      >
        <Container className="side-nav__container">
          {children}
        </Container>
      </SidenavEl>
    );
  }
}
