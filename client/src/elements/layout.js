import glamorous from 'glamorous';

export const Container = glamorous.div({
  padding: '0 15px',
});

export const Row = glamorous.div(props => ({
  display: 'flex',
  marginLeft: '-10px',
  marginRight: '-10px',
  alignItems: props.centered ? 'center' : 'stretch',
}));

export const Col = glamorous.div(props => ({
  padding: '0 10px',
  flex: `${props.colNum}`,
}));

export const CenteredDiv = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const MainContainer = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  padding: '1rem 15px',
  zIndex: 1,
});

export const SidebarContainer = glamorous.div({
  backgroundColor: 'rgba(1, 8, 9, 0.7)',
  flex: '0 0 300px',
  borderRight: '1px solid #5f5f5f',
  padding: '2rem 15px',
  zIndex: 1,
});

export const BackgroundContainer = glamorous.div({
  display: 'flex',
  backgroundColor: '#000',
  color: '#fff',
  minHeight: '100vh',
  overflow: 'auto',
  '&::before': {
    content: `' '`,
    zIndex: 0,
    opacity: 0.3,
    display: 'block',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
});
