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
      violations: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("/api")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          violations: data.data
        });
      });
  }

  renderLeaflet() {
    const violations = this.state.violations;
    console.log(violations);
    return (
      <Map center={[38.7849, -76.8721]} zoom={9.5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {violations.map((violations, idx) => (
          <Marker
            position={[
              parseFloat(violations.latLng.lat),
              parseFloat(violations.latLng.lng),
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
              <a className="search-btn" href="#">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
