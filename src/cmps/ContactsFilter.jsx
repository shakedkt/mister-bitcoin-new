import React, { Component } from 'react';

export default class ContactFilter extends Component {
  state = {
    term: '',
  };

  constructor(props) {
    super(props);
    this.state = { ...props.filterBy };
    // CANT setState IN ctor
    // this.setState({ ...props.filterBy });
  }

  onChangeHandler = (ev) => {
    const { value, name } = ev.target;
    this.setState({ [name]: value }, () => {
      this.props.onFilter({ ...this.state });
    });
  };

  render() {
    return (
      <form className="filter-search">
        <input
          type="text"
          placeholder="Contact Name"
          onChange={this.onChangeHandler}
          name="term"
          value={this.state.term}
        />
      </form>
    );
  }
}
