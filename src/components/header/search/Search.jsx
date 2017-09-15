import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';
import { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  renderOption = (option) => (
    <Highlighter
      searchWords={[this._inputValue]}
      textToHighlight={option.label}
    />
  );

  render() {
    return (
      <Creatable
        autofocus
        autoBlur
        className='searchbar'
        placeholder='Search...'
        onChange={(val) => this.props.onChange(val ? val.value : undefined)}
        onInputChange={(inputValue) => this._inputValue = inputValue}
        shouldKeyDownEventCreateNewOption={() => false}
        promptTextCreator={label => label}
        options={this.props.options}
        optionRenderer={this.renderOption}
      />
    )
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default Search;
