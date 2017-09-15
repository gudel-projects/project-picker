import { connect } from 'react-redux';

import Search from './Search';
import { setTerm } from '../../../state/actions';

const MOCK_OPTIONS = [
  { value: 'MAX', label: 'MAX' },
  { value: 'FANUC', label: 'FANUC' },
  { value: 'Nikki Inc.', label: 'Nikki Inc.' },
  { value: 'Schmidt Co.', label: 'Schmidt Co.' },
  { value: 'Fanuc Motors Inc.', label: 'Fanuc Motors Inc.' },
  { value: 'The Fanuc Inc.', label: 'The Fanuc Inc.' },
  { value: 'mor', label: 'mor' },
  { value: 'Tom', label: 'Tom' },
  { value: 'TOM/Church', label: 'TOM/Church' },
];

const mapStateToProps = state => ({
  options: MOCK_OPTIONS,
});

export default connect(
  mapStateToProps,
  { onChange: setTerm }
)(Search);
