import { connect } from 'react-redux';

import FilterPanelContent from './FilterPanelContent';
import {
  setModel,
} from '../../../state/actions';
import {
  getModelFilterState,
} from '../../../state/reducers/filters';

const mapStateToProps = state => ({
  model: getModelFilterState(state),
});

export default connect(
  mapStateToProps,
  { onChangeModel: setModel }
)(FilterPanelContent);
