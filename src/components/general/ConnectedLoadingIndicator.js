import { connect } from 'react-redux';

import LoadingIndicator from './LoadingIndicator';
import { getIsLoading } from '../../state/reducers/loading';

const mapStateToProps = state => ({
  loading: getIsLoading(state),
});

export default connect(
  mapStateToProps
)(LoadingIndicator);
