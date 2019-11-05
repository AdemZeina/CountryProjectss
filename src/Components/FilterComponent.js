import React, { Component } from "react";
export class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }
  render() {
    const countries = this.props.countries;
    console.log("filter", countries);
    const citiesOptions =
      countries && countries.length ? (
        countries.map(country => {
          return (
            <option value={country.id} key={country.id}>
              {country.name}
            </option>
          );
        })
      ) : (
        <option>No Countries</option>
      );
    return (
      <select
        value={this.state.selectedItem}
        onChange={e => this.props.onChange(e.target.value)}
        className="form-control"
      >
        <option>Select A Country</option>
        {citiesOptions}
      </select>
    );
  }
}
