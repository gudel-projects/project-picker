import { connect } from 'react-redux';

import Project from './Project';
import { toggleProject } from '../../../state/actions';
import { getIsExpanded } from '../../../state/reducers/expanded';

const mapStateToProps = (state, ownProps) => ({
  expanded: getIsExpanded(state, ownProps.id),  // TODO
  ...ownProps,
});

export default connect(
  mapStateToProps,
  { onToggle: toggleProject }
)(Project);
