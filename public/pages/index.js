import React from "react";
import Layout from "../components/Layout";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  FeatureGroup,
} from "react-leaflet-universal";
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
      geoCoords: {},
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleZoom = this.handleZoom.bind(this);

    this.mapRef = React.createRef();
    this.groupRef = React.createRef();
  }

  componentDidUpdate() {
    this.handleZoom();
  }

  putSearch() {
    const value = this.state.value;

    return fetch("/api/search", {
      method: "PUT",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search: value }),
    }).then((res) => res);
  }

  getSearch() {
    if (this.state.value !== "") {
      fetch("/api/search/results", {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            violations: res.location,
            searchRendered: true,
            geoCoords: res.geoCoords,
          })
        );
    }
  }

  async handleZoom() {
    if (this.state.searchRendered) {
      const map = await this.mapRef.current.leafletElement;
      const group = await this.groupRef.current.leafletElement;
      map.fitBounds(group.getBounds());
    }
  }

  handleSearch() {
    this.setState(
      { value: document.querySelector(".search-txt").value },
      async () => {
        this.putSearch().then(() => {
          this.getSearch();
        });
      }
    );
  }

  renderLeaflet() {
    return (
      <Map center={[38.7849, -76.8721]} zoom={9.5} ref={this.mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.renderSearch()}
      </Map>
    );
  }

  renderSearch() {
    if (this.state.searchRendered) {
      const violations = this.state.violations;
      const geoCoords = this.state.geoCoords;

      return (
        <FeatureGroup ref={this.groupRef}>
          <Marker
            position={[parseFloat(geoCoords.lat), parseFloat(geoCoords.lng)]}
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
        </FeatureGroup>
      );
    }
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="wrapper">
            <div className="slogan">
              <h1>Don't Be a Fool, </h1>
              <h1>
                Check Before You &nbsp;
                <div className="green">
                  <Typewriter
                    options={{
                      strings: ["Buy", "Rent"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </h1>
            </div>
            <div className="search-inst">
              <Typewriter
                options={{
                  strings: [
                    "Type in address, street name, and street suffix",
                    "then press the button!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="search-box">
              <input
                className="search-txt"
                type="text"
                name=""
                placeholder="Type to search"
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    this.handleSearch();
                  }
                }}
              />
              <a className="search-btn" href="#" onClick={this.handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </div>
            <div className="map">{this.renderLeaflet()}</div>
          </div>
        </div>
      </Layout>
    );
  }
}
