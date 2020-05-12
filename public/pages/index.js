import React from "react";
import Layout from "../components/Layout";
import { Map, Marker, Popup, TileLayer } from "react-leaflet-universal";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchRendered: false,
      value: "",
      violations: [],
      geoCoords: {}
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {

    this.setState({ value: document.querySelector('.search-txt').value }, async () => {
      this.postSearch().then(() => {
        this.getSearch();
      });
    });
  }

  postSearch() {
    const value = this.state.value;

    return fetch('/api/search', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ search: value })
    }).then(res => res);
  }

  getSearch() {
    if (this.state.value !== "") {
      fetch('/api/search/results', {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => res.json())
        .then((res) => this.setState({ violations: res.location, searchRendered: true, geoCoords: res.geoCoords }))
    }
  }

  renderSearch() {
    if (this.state.searchRendered) {
      const violations = this.state.violations;
      const geoCoords = this.state.geoCoords;

      return (
        <Marker
          position={[
            parseFloat(geoCoords.lat),
            parseFloat(geoCoords.lng)
          ]}
        >
          <Popup>
            {violations.address.street_number}{" "}
            {violations.address.street_name}{" "}
            {violations.address.street_suffix} {violations.address.city}{" "}
            {violations.address.state} {violations.address.zip} <br />
            <b>Inspection ID: </b>
            {violations.violations[0].inspectionID}
            <br />
            <b>Violation ID: </b>
            {violations.violations[0].violationID}
            <br />
            <b>Code: </b>
            {violations.violations[0].code}
            <br />
            <b>Description: </b>
            {violations.violations[0].desc}
            <br />
            <b>Count: </b>
            {violations.count}
          </Popup>
        </Marker>
      )
    }
  }

  renderLeaflet() {

    return (
      <Map center={[38.7849, -76.8721]} zoom={9.5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.renderSearch()}
      </Map>
    );
  }
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="wrapper">
            {/*<Typewriter
            options={{
              strings: ['Type in address', 'or street name', 'or zip code', 'or just watch me type!'],
              autoStart: true,
              loop: true
            }}
            />
            */}
            <div className="map">{this.renderLeaflet()}</div>
            <div className="search-box">
              <input
                className="search-txt"
                type="text"
                name=""
                placeholder="Type to search"
              />
              <a className="search-btn" href="#" onClick={this.handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/*
        {violations.map((violations, idx) => (
          <Marker
            position={[
              parseFloat(violations.latLng.lat),
              parseFloat(violations.latLng.lng)
            ]}
            key={idx}
          >
            <Popup>
              {violations.address.street_number}{" "}
              {violations.address.street_name}{" "}
              {violations.address.street_suffix} {violations.address.city}{" "}
              {violations.address.state} {violations.address.zip} <br />
              <b>Inspection ID: </b>
              {violations.violations[0].inspectionID}
              <br />
              <b>Violation ID: </b>
              {violations.violations[0].violationID}
              <br />
              <b>Code: </b>
              {violations.violations[0].code}
              <br />
              <b>Description: </b>
              {violations.violations[0].desc}
              <br />
              <b>Count: </b>
              {violations.count}
            </Popup>
          </Marker>
        ))}
*/
