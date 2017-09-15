import { connect } from 'react-redux';

import Header from './Header';
import { setTerm } from '../../../state/actions';
import { getProjectCount } from '../../../state/reducers/projects';
import { getTerm } from '../../../state/reducers/query';

const mapStateToProps = state => ({
  count: getProjectCount(state),
  term: getTerm(state),
});

const mapDispatchToProps = dispatch => ({
  onClearTerm: () => dispatch(setTerm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
