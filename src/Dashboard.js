import React, { Component } from "react";
import { Projects } from "./Table/Projects";
import { FilterComponent } from "./Components/FilterComponent";
import { Header } from "./Table/Header";
import app from "./index.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Redirect } from "react-router-dom";

const config = require("./config/default.json");

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      projects: [],
      projects2: [],
    };
  }

  componentDidMount() {
    const url = config.apiUrl;

    fetch(url + "/Countries/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          countries: data,
        });
      })
      .catch(error => {
        this.setState({
          error: true,
        });
      });
    this.getProjects();
  }
  selectedCountryId = 0;

  getProjects = () => {
    const countryId = this.selectedCountryId;
    console.log("id", countryId);
    console.log(countryId);
    const url = config.apiUrl;

    fetch(url + "/CountryProjects/", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ countryId: countryId }),
    })
      .then(response => {
        console.log(response);
        if (response.status === 200) return response.json();
      })
      .then(data => {
        if (!data) return;
        console.log(data);
        this.setState({
          projects: data,
        });
      })
      .catch(error => {
        this.setState({
          error: true,
        });
      });
  };

  updateFilters = countryId => {
    console.log(countryId);
    this.selectedCountryId = countryId;
  };
  //countries = [{id:3,name:'sdf'}];

  fileName = "ww";

  render() {
    // const { projects, auth } = this.props;

    // if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-md-12">
            <h2 className="white-col">Country Projects</h2>
          </div>

          <div className="col-md-4 center">
            <FilterComponent
              onChange={this.updateFilters}
              countries={this.state.countries}
            ></FilterComponent>
          </div>
          <div className="col-md-2">
            <button onClick={this.getProjects} className="btn btn-lg success">
              Get
            </button>
          </div>
          <div className="col-md-6 center">
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="btn btn-info"
              table="table-to-xls"
              filename="CountryProjects"
              sheet="projects"
              buttonText="Download as Excel"
            />
          </div>
        </div>
        <div className="container-fluid">
          <div className="col-md-10">
            <Projects projects={this.state.projects} />
          </div>
        </div>
      </div>
    );
  }
}
