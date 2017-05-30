import glamorous from 'glamorous';

export const Button = glamorous.button(props => ({
  backgroundColor: props.active ? '#000' : '#fff',
  color: props.active ? '#fff' : '#000',
  border: `1px solid ${props.active ? '#fff' : 'transparent'}`,
  padding: '0.5rem 1rem',
  fontSize: '12px',
  textTransform: 'uppercase',
  fontWeight: '700',
  ':hover': {
    backgroundColor: '#000',
    color: '#fff',
    border: '1px solid #fff',
  },
  ':active': {
    backgroundColor: '#fff',
    color: '#000',
  },
}));
