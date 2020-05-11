import React from 'react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet-universal';
import Typewriter from 'typewriter-effect';




export default class IndexPage extends React.Component {

  constructor() {
    super();
    this.state = {
      violations: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch('/api')
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          violations: data.data
        })
      })
  }

  renderLeaflet() {
    const violations = this.state.violations;
    console.log(violations)
    return (
      <Map center={[38.7849, -76.8721]} zoom={9.5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {violations.map((violations, idx) => (
          <Marker position={[parseFloat(violations.latLng.lat), parseFloat(violations.latLng.lng)]} key={idx}>
            <Popup>{violations.address.street_number} {violations.address.street_name} {violations.address.street_suffix} {violations.address.city} {violations.address.state} {violations.address.zip} <br /><b>Inspection ID: </b>{violations.violations[0].inspectionID}<br /><b>Violation ID: </b>{violations.violations[0].violationID}<br /><b>Code: </b>{violations.violations[0].code}<br /><b>Description: </b>{violations.violations[0].desc}<br /><b>Count: </b>{violations.count}</Popup>
          </Marker>
        ))}
      </Map>
    )
  }
  render() {

    return (
      <Layout>
        <div className="container">
          <div className="wrapperIndex">
            {/*<Typewriter
            options={{
              strings: ['Type in address', 'or street name', 'or zip code', 'or just watch me type!'],
              autoStart: true,
              loop: true
            }}
            />
            */}
            <Search />
            <div className="map">
              {this.renderLeaflet()}
            </div>

          </div>

        </div>

      </Layout>
    );

  }

}
