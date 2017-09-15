import React from 'react';
import PropTypes from 'prop-types';

/*
  Checkbox component with a label underneath the box
*/
const Checkbox = ({ checked, label }) => (
  <table>
    <tr>
      <td class='checkboxLabelBottom'>
        <label>
          <input type="checkbox" checked={checked} align="" />
          <div>{label}</div>
        </label>
      </td>
    </tr>
  </table>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
