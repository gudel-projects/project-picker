import React from 'react';
import { Button, ButtonToolbar, OverlayTrigger, Popover } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import ConnectedFilterPanelContent from './ConnectedFilterPanelContent';

const Filter = () => (
  <ButtonToolbar className="Filter">
    <OverlayTrigger
      rootClose
      trigger='click'
      placement='bottom'
      overlay={<Popover id='FilterPanel'><ConnectedFilterPanelContent /></Popover>}
    >
      <Button>Filters</Button>
    </OverlayTrigger>
  </ButtonToolbar>
);

export default Filter;
